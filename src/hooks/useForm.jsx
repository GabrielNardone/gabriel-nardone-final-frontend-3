import { useState } from "react"

export const useForm = (initialForm) => {

    const [input, setInput] = useState(initialForm)
    const [nameError, setNameError] = useState("")
    const [emailErrors, setEmailErrors] = useState("")


    const handleChangeInput = (event) => {
        const { value, name } = event.target

        setInput({
            ...input,
            [name]: value
        })
    }

    const onResetForm = () => {
        setInput(initialForm);
    }


    const validateName = () => {
        if (!input.name) {
            setNameError("Required")
        } else if (input.name.length < 5) {
            setNameError("Must be more than 5 characters")
        }
    }

    const validateEmail = () => {
        if (!input.email) {
            setEmailErrors("Required")
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
            setEmailErrors("Invalid email address");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        validateName()
        validateEmail()
        console.log(input);
        onResetForm()
    }


    return {
        input,
        handleChangeInput,
        handleSubmit,
        nameError,
        emailErrors
    }
}
