import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import HomePage from "./Components/HomePage"
import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/reserve-a-table" element={ <Main /> } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
