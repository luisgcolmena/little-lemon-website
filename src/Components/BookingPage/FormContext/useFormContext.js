import { useState, createContext, useContext } from "react";

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '00:00',
    phoneNumber: '',
    email: '',
    guests: '1',
    ocassion:'Birthday',
    notes: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((formData) => ({
      ...formData,
      [name]: value
  }))
  }

  return(
    <FormContext.Provider value={{formData,handleChange}}>
      { children }
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)