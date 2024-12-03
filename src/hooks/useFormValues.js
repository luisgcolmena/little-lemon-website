import { useState } from "react"

export function useFormValues() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('00:00')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState('1')
  const [ocassion, setOcassion] = useState('Birthday')
  const [notes, setNotes] = useState('')

  const formValues = {
    name: name,
    date: date,
    time: time,
    phoneNumber: phoneNumber,
    email: email,
    guests: guests,
    ocassion: ocassion,
    notes: notes
  }

  const formSetValues = {
    name: setName,
    date: setDate,
    time: setTime,
    phoneNumber: setPhoneNumber,
    email: setEmail,
    guests: setGuests,
    ocassion: setOcassion,
    notes: setNotes
  }

  return { formValues, formSetValues }
}

export default useFormValues