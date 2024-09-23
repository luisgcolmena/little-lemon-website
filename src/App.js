import './App.css'
import Header from "./Components/Header"
import HomePage from "./Components/HomePage"
import BookingPage from "./Views/BookingPage"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/bookings" element={ <BookingPage /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
