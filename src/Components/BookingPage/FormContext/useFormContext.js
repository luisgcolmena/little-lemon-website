import { useState, createContext, useContext, useMemo, useCallback } from "react";

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  /* const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '00:00',
    phoneNumber: '',
    email: '',
    guests: '1',
    ocassion:'Birthday',
    notes: ''
  }) */
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('00:00')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState('1')
  const [ocassion, setOcassion] = useState('Birthday')
  const [notes, setNotes] = useState('')

  /* const handleChange = useCallback((e) => {
    const {name, value} = e.target
    setForm[name]((prevState) => {
      if (prevState[name] === value) return prevState
      return {...prevState, [name]: value}
    })
  }, []) */

  const contextValues = {
    name: name,
    date: date,
    time: time,
    phoneNumber: phoneNumber,
    email: email,
    guests: guests,
    ocassion: ocassion,
    notes: notes
  }
  const contextSetValues = {
    name: setName,
    date: setDate,
    setTime,
    setPhoneNumber,
    setEmail,
    setGuests,
    setOcassion,
    setNotes
  }

  return(
    <FormContext.Provider value={{contextValues, contextSetValues}}>
      { children }
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)