import './About.css'
import front_logo from '../../../assets/restaurant chef B.jpg'
import back_logo from '../../../assets/Mario and Adrian b.jpg'

function About() {
  return (
    <section className="about-section">
      <div className='about-container'>
        <div className='about-texts'>
          <div className='about-titles'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </div>
        <div className='about-imgs-container'>
          <img src={ front_logo } className='about-front-logo' alt='Little Lemon frontside logo'/>
          <img src={ back_logo } className='about-back-logo' alt='Little Lemon backside logo'/>
        </div>
      </div>
    </section>
  )
}

export default About