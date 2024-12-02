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

  const contextValues = useMemo(
    () => ({
    name: name,
    date: date,
    time: time,
    phoneNumber: phoneNumber,
    email: email,
    guests: guests,
    ocassion: ocassion,
    notes: notes
  }), [name,date,time,phoneNumber,email,guests,ocassion,notes])

  const contextSetValues = useMemo(
    () => ({
    name: setName,
    date: setDate,
    time: setTime,
    phoneNumber: setPhoneNumber,
    email: setEmail,
    guests: setGuests,
    ocassion: setOcassion,
    notes: setNotes
  }),[])

  return(
    <FormContext.Provider value={{contextValues, contextSetValues}}>
      { children }
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)