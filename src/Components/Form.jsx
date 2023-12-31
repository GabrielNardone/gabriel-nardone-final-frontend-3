import { useForm } from "../hooks/useForm";


const initialForm = {
  name: "",
  email: ""
}

const Form = () => {

  const { input, handleChangeInput, handleSubmit, nameError, emailErrors, success } = useForm(initialForm)

  return (
    <div>
      <form className="form" onSubmit={(event) => handleSubmit(event)}>

        <label htmlFor="name"> Name </label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={input.name}
          onChange={(event) => handleChangeInput(event)}
        />
        {nameError ? <span style={{ color: "#AA0000", fontWeight: "bold", marginTop: 10 }} >{nameError}</span> : ""}

        <label htmlFor="email"> Email</label>
        <input
          type="email"
          placeholder="email@digital.com"
          name="email"
          value={input.email}
          onChange={(event) => handleChangeInput(event)}
        />
        {emailErrors ? <span style={{ color: "#AA0000", fontWeight: "bold", marginTop: 10 }} >{emailErrors}</span> : ""}

        <button type="submit" style={{ marginTop: 25, height: 30 }}>Send</button>
      </form>

      {success
        ? <div style={{color: "#009000", fontWeight: "bold", textAlign: "center"}}>
          <p>Thank you for contacting us</p>
          <p>we will send you a messagge soon</p>
        </div>
        : ""
      }

    </div>
  );
};

export default Form;
