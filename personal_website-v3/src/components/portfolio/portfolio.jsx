import React from 'react'
import './portfolio'

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <h3>Portfolio item title</h3>
                        <a href="" className='btn btn-primary'>Github</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default portfolio
