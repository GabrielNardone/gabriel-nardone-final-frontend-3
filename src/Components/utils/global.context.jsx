import { createContext, useEffect, useReducer, useState } from "react";


//* URL **************

const URL = "https://jsonplaceholder.typicode.com/users"

//* STORAGE *******************

const initDoctorsData = () => {
  const favsData = localStorage.getItem("favs");
  return favsData ? JSON.parse(favsData) : [];
};

const setFavInStorage = (favs) => {
  localStorage.setItem("favs", JSON.stringify(favs));
}

const initTheme = () => {
  const themeColor = localStorage.getItem("theme");
  return themeColor ? JSON.parse(themeColor) : themes.light;
};

const setThemeColor = (theme) => {
  localStorage.setItem("theme", JSON.stringify(theme))
}

//* INITIAL STATE **************

export const themes = {
  light: {
    font: "black",
    background: "#fff",
    navBackground: "#e5e7eb",
    imgShadow: "",
    borderShadow: "",
    footerBg: "#e5e7eb",
    cardShadow: "rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    addBtnFavBg: "#F29727",
    cardBg: "",
    formBg: "#7FCDCD"
  },
  dark: {
    font: "#fff",
    background: "#282D3C",
    navBackground: "black",
    imgShadow: "rgba(231, 237, 243, 0.35) 0px 3px 6px 3px",
    borderShadow: "rgba(231, 237, 243, 0.35) 0px -2px 6px 0px inset",
    footerBg: "#6B5B95",
    cardShadow: "rgba(231, 237, 243, 0.35) 0px -2px 6px 0px inset",
    addBtnFavBg: "#6B5B95",
    cardBg: "#2D2727",
    formBg: "#2D2727"
  }
}

const initialState = {
  data: null,
  loading: true,
  favs: initDoctorsData()
};


//* REDUCER **************

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true };

    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };

    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };

    case 'REMOVE_FAV':
      return { ...state, favs: state.favs.filter(elem => elem.id !== action.payload) };

    default:
      return state;
  }
};

//* CONTEXT PROVIDER **************

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  //* THEME FUNCTIONS
  const [theme, setTheme] = useState(initTheme());

  const handleChangeTheme = () => {
    setTheme(prevTheme => (
      prevTheme === themes.light ? themes.dark : themes.light
    ))
  }

  //* DOCTORS DATA FUNCTIONS

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'FETCH_START' });

    const response = await fetch(URL);
    const data = await response.json();

    dispatch({ type: 'FETCH_SUCCESS', payload: data });
  }

  const addFav = (data) => {
    if (!state.favs.some(fav => fav.id === data.id)) {
      dispatch({ type: "ADD_FAV", payload: data })
    }
    return
  }

  const removeFav = (id) => {
    dispatch({type:"REMOVE_FAV", payload: id})
  }

  useEffect(() => {
    setThemeColor(theme)
  }, [theme])

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFavInStorage(state.favs)
  }, [state.favs])


  return (
    <ContextGlobal.Provider value={{ theme, handleChangeTheme, state, addFav, removeFav }}>
      {children}
    </ContextGlobal.Provider>
  );
};
