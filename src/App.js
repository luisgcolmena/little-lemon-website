import './App.css'
import Header from './Components/Header/Header'
import HomePage from './Components/HomePage/HomePage'
import BookingPage from "./Components/BookingPage/BookingPage"
import ConfirmedBooking from './Components/ConfirmedBooking/ConfirmedBooking'
import Footer from "./Components/Footer/Footer"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/bookings" element={ <BookingPage /> } />
        <Route path="/confirmation" element={ <ConfirmedBooking /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
