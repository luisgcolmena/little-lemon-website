import { useState, createContext, useContext } from "react";

export const FormContext = createContext()

export const FormProvider = ({ children }) => {

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('00:00')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState('1')
  const [ocassion, setOcassion] = useState('Birthday')
  const [notes, setNotes] = useState('')

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
    time: setTime,
    phoneNumber: setPhoneNumber,
    email: setEmail,
    guests: setGuests,
    ocassion: setOcassion,
    notes: setNotes
  }

  return(
    <FormContext.Provider value={{contextValues, contextSetValues}}>
      { children }
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)