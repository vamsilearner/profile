import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_km84l97', form.current, '7fibu7RmIA0CK-JTR')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          {/* <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1> */}
          <h1>
              <span className="chonburi-font green-text">Get</span> in Touch
            </h1>
          <h3 style={{color: "white"}}>
            I am Open for the Opportunities and I am interested in freelance opportunities - especially ambitious or
            large projects. 
          </h3>
          <h3 style={{color: "white"}}>
          For any information regarding my work kindly, contact me though
              the following phone number or email address.
              </h3>
          <div className="contact-form">
          
            <h3 className="mb-4">
              <span className="chonburi-font green-text">PhoneNo:</span> 
              <span style={{color: "white"}}>+91
              9440471046
              </span>
            </h3>
            <h3 className="mb-4">
              <span className="chonburi-font green-text">Email:</span>{" "}
              <span style={{color: "white"}}>
              vamsikrishna.inn@gmail.com
              </span>
            </h3>
            {/* <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form> */}
          </div>
        </div>
        <div className="info-map">
          Kancharla VamsiKrishna Prasad
          <br />
          Hyderabad, Telangana
          <br />
          India <br />
          <span>VamsiKrishna.inn@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[17.5171, 78.5150]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[17.5171, 78.5150]}>
              <Popup>
              Kancharla VamsiKrishna Prasad lives in this area, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
