import React from 'react'
import './about.css'
import Photo from '../../assets/me_programming.JPG'

const about = () => {
    return (
        <section id='about'>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Photo} alt="about image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <a href="https://www.linkedin.com/in/alex-rosen-7152281b7/">
                            <article className='about__card'>
                                <h5>Experience</h5>
                                <small>3+ years</small>
                            </article>
                        </a>
                        <a href="https://arpersonalwebsite.com/">
                            <article className='about__card'>
                                <h5>Previous Website</h5>
                                <small>Developed early 2022</small>
                            </article>
                        </a>
                    </div>
                    <p>
                        I'll begin studying computer science at the University of Toronto this September, and I'm currently working as a software engineering intern. However, this summer, I will also try to focus a great deal of my time on hackathons and preparing for University courses. The area of computer science that, for now, interests me the most is artificial intelligence. More specifically, the various applications of artificial intelligence to understanding financial markets. Have fun exploring my projects, and feel free to contact me below if you have questions about my resume or proposals for interesting open-source projects.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default about
