import React from 'react'
import './portfolio.css'
import Image1 from '../../assets/portfolio4.jpg'

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={Image1} alt="portfolio-image-1" />
                    </div>
                    <h3>Portfolio item title</h3>
                    <div className="portfolio__buttons">
                        <a href="" className='btn'>Github</a>
                        <a href="" className='btn btn-primary'>Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default portfolio
