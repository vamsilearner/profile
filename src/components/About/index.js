import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  // faAws,
  // faEthereum,
  // faGolang,
  faJsSquare,
  // faPython,
  faReact,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faMdb
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h3 style={{color: "white"}}>
          My name is Vamsi Krishna, and I'm a Full Stack Developer with a diverse background in the software development field. I have worked as a Frontend Developer, Associate Software Engineer, and currently, I am working as a Freelancer."
          </h3>
          <h3 style={{color: "white"}}>
"I completed my schooling at Ratnam School and pursued my intermediate studies at Sri Gayatri College. Later, I pursued engineering at RGM College, which laid a strong foundation for my career in software development."
</h3>
<h3 style={{color: "white"}}>
"To start my career, I worked as a Frontend Developer at Nxtwave for 8 months. Following that, I joined Marvis IT Services as an Associate Software Engineer, where I spent 1 year. During my time there, I transitioned into a Full Stack Developer role for 6 months. Since March 2023, I have been working as a Freelancer."
</h3>
<h3 style={{color: "white"}}>
"One of my notable achievements is the development of juiceman.in, an end-to-end solution for managing vendor accounts. I took sole responsibility for the development of this platform. Additionally, I have worked on creating a website for Smartrinoverse, an IoT startup, and developed an e-commerce platform called 'Agrilyfe,' empowering farmers to sell their agricultural products. For 'Agrilyfe,' I handled both frontend and backend aspects, building the website from scratch."
</h3>
<h3 style={{color: "white"}}>
"In terms of skills, I have expertise in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am also familiar with tools and frameworks such as Sentry.io, Google Analytics, Craft.js, React Page Editor, Ant Design, Material-UI, and Chakra UI. My focus is on developing user-centric applications with a strong emphasis on functionality and user experience."
          </h3>

         
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3Alt} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faMdb} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
