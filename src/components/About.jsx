import React from 'react'
import cooldude from "../assets/cooldude.jpg"
const About = () => {
  return (
    <>
    <header className='about-header'>
        <h1>about</h1>
    </header>
    <section className='about-container'>
        <section className='img-wraper'>
            <img src={cooldude} alt="" />
        </section>
        <article className='about-content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolor similique molestiae numquam! 
                Exercitationem, non officia asperiores explicabo error maiores voluptatum temporibus ipsam molestias, 
                tenetur fugiat ratione eius natus aut.
            </p>
        </article>
    </section>
    </>
  )
}

export default About