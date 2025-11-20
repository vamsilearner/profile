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
          "Vamsi Krishna is a Full Stack Developer with 3.5 years of professional experience building modern, scalable web applications. His core strength lies in frontend engineering, specializing in React.js, Next.js, TypeScript, Redux, and high-performance UI development. Vamsi also has solid backend expertise using Node.js, Express.js, PostgreSQL, and hands-on experience in designing secure APIs, microservices, and distributed systems."
  </h3>
<h3 style={{color: "white"}}>
"Over the course of his career, he has worked on enterprise-level applications, contributing to end-to-end development—covering architecture, frontend, backend, APIs, deployments, and performance optimization. Vamsi has implemented monorepo workflows (Turborepo, Nx), Docker-based deployments, AWS cloud environments, and advanced SSR/SSG strategies, ensuring high availability and excellent user experience."
  </h3>
<h3 style={{color: "white"}}>
"He has consistently delivered production-ready features, improved UI performance, optimized database queries, and built reusable component systems. Vamsi has also collaborated closely with cross-functional teams, handled scenario-based problem solving, and contributed to both frontend and backend tech migrations.:
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
