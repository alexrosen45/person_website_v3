import React from 'react'
import './portfolio.css'
import Image1 from '../../assets/portfolio4.jpg'

// portfolio item data
const PORTFOLIO_ITEMS = [
    {
        image: Image1,
        title: "This is a title",
        github_link: "",
        is_demo: false,
        demo_link: ""
    },
    {
        image: Image1,
        title: "This is a title with demo",
        github_link: "",
        is_demo: true,
        demo_link: ""
    }
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    PORTFOLIO_ITEMS.map(({
                        image, title, github_link, is_demo, demo_link
                    }) => {
                        var demo_button;

                        if (is_demo) {
                            demo_button = <a href={demo_link} className='btn btn-primary'>Demo</a>;
                        } else {
                            demo_button = null; // show no demo button
                        }

                        return (
                            <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt="portfolio-image-1" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__buttons">
                                    <a href={github_link} className='btn'>Github</a>
                                    {demo_button}
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default portfolio
