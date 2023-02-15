import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAws,
  faEthereum,
  faGolang,
  faJsSquare,
  faPython,
  faReact,
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
          <p>
            I'm a very ambitious blockchain engineer, fullstack developer and
            python and golang expert looking for a role in an established IT
            company with the opportunity to work with the latest technologies on
            challenging and diverse projects. And I write Solidity code!
          </p>
          <p align="LEFT">
            I have worked in the software engineering industry for the past 10
            years. I did my internship at the Laboratory for Atmospheric and
            Space Physics Lab as a Junior developer working with telemetry and
            solar data while I was getting my Bachelor’s degree. I then
            proceeded to work as a software engineer at a company called Avaya
            where I also contributed a lot to working in various facets of the
            organization from developing python and bash scripts for automation
            to directly developing the REST API in Java to performing various
            linux system administration tasks. In 2016, I left to work as a
            Devops Engineer in the Cybersecurity department for Lockheed Martin
            and two years later starting 2018, I started to explore
            opportunities in the blockchain industry where I have been working
            ever since.
          </p>
          <p>
            I not only have a wide array of expertise in various programming
            languages like Golang and Python but I also have enormous experience
            in writing blog posts on complicated technical topics, making
            tutorial videos, writing sample codes and also presenting on various
            topics in front of a large crowd. I also happen to possess excellent
            problem-solving, verbal and written communication skills and I am
            also considered a quick learner, a team player and a multitasker. My
            special talents in being able to take a complicated technical topic
            and present it in a manner that is very easy to digest to new and
            experienced developers alike will surely benefit any software
            company while also providing me a wonderful opportunity to further
            advance my skills.
          </p>
          <p>
            Part of my success is because I value the importance of the world we
            live in and continue to make it a better place to the best of my
            ability. I have a fast learning curve and I love learning new things
            every single day. I also pay very close attention to detail and as a
            representative of your team, I would bring focus not only to the
            value of your services but also to the quality of my own work.
            Furthermore, I am a smart, hard-working, self-starter who works well
            in a team environment and loves new challenges while also innovating
            new ways to do things everyday.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faEthereum} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAws} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGolang} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
