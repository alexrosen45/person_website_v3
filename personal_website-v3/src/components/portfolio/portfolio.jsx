import React from 'react'
import './portfolio.css'

// portfolio images
import Image1 from '../../assets/projects/spaceship.jpg'
import Image2 from '../../assets/projects/neural_network.jpg'
import Image3 from '../../assets/projects/covid-19_app_logo.png'
import Image4 from '../../assets/projects/AES128.PNG'
import Image5 from '../../assets/projects/doge.png'
import Image6 from '../../assets/projects/snacker.png'
import Image7 from '../../assets/projects/bitcoin_call_options.jpg'
import Image8 from '../../assets/projects/tPay.PNG'

// personal website images
import WebsiteImage1 from '../../assets/projects/web_design_cartoon.jpg'
import WebsiteImage2 from '../../assets/projects/personal_website_2.jpg'

// industry projects images
import IndustryImage1 from '../../assets/projects/oppos.PNG'
import IndustryImage2 from '../../assets/projects/personal_website_2.jpg'

// portfolio item data
const PORTFOLIO_ITEMS = [
    {
        image: Image8,
        title: "tPay",
        date: "November 2022",
        is_github: true,
        github_link: "https://github.com/alexrosen45/tPay",
        is_demo: true,
        demo_link: "https://devpost.com/software/tpay"
    },
    {
        image: Image7,
        title: "Pricing Bitcon Options",
        date: "January 2022",
        is_github: true,
        github_link: "https://github.com/alexrosen45/bitcoin_call_options_-public-/blob/main/Implementation%20of%20Black-Scholes%20for%20Bitcoin%20Call%20Options.pdf",
        is_demo: false,
        demo_link: ""
    },
    {
        image: Image6,
        title: "Snacker",
        date: "Summer 2021",
        is_github: false,
        github_link: "",
        is_demo: true,
        demo_link: "https://sites.google.com/view/snacker-download"
    },
    {
        image: Image5,
        title: "Dogebot (Dogecoin trading bot)",
        date: "June 2021",
        is_github: true,
        github_link: "https://github.com/alexrosen45/dogebot1.0",
        is_demo: false,
        demo_link: ""
    },
    {
        image: Image4,
        title: "Python Implementation of AES",
        date: "March 2021",
        is_github: true,
        github_link: "https://github.com/alexrosen45/AES128",
        is_demo: false,
        demo_link: ""
    },
    {
        image: Image3,
        title: "COVID-19 Information/News App",
        date: "March 2021",
        is_github: true,
        github_link: "https://github.com/alexrosen45/covid-19-information-app",
        is_demo: false,
        demo_link: ""
    },
    {
        image: Image2,
        title: "Simple Neural Networks",
        date: "February 2021",
        is_github: true,
        github_link: "https://github.com/alexrosen45/Simple-Neural-Net",
        is_demo: false,
        demo_link: ""
    },
    {
        image: Image1,
        title: "Cargo Run (first project!)",
        date: "February 2021",
        is_github: true,
        github_link: "https://github.com/alexrosen45/cargo-run",
        is_demo: false,
        demo_link: ""
    },
]

// past personal websites data
const PERSONAL_WEBSITES = [
    {
        image: WebsiteImage2,
        title: "Version 3",
        date: "November 2022",
        is_github: true,
        github_link: "https://github.com/alexrosen45/personal_website_v3",
        is_demo: true,
        demo_link: "#"
    },
    {
        image: WebsiteImage2,
        title: "Version 2",
        date: "May 2022",
        is_github: true,
        github_link: "https://github.com/alexrosen45/personal_website_2",
        is_demo: true,
        demo_link: "arpersonalwebsite.com"
    },
    {
        image: WebsiteImage1,
        title: "Version 1",
        date: "February 2021",
        is_github: true,
        github_link: "https://github.com/alexrosen45/personal_website_1.1",
        is_demo: false,
        demo_link: ""
    },
]

// past industry projects data
const INDUSTRY_PROJECTS = [
    {
        image: WebsiteImage1,
        title: "Wall Street Bots",
        date: "Ongoing",
        is_github: true,
        github_link: "https://github.com/UTMIST/WallStreetBots",
        is_demo: true,
        demo_link: "https://utorontomist.medium.com/wall-street-bots-building-an-automatic-stock-trading-platform-based-on-artificial-intelligence-4f49df89ac41"
    },
    {
        image: IndustryImage1,
        title: "Oppos Secure",
        date: "Summer 2022",
        is_github: false,
        github_link: "",
        is_demo: true,
        demo_link: "https://oppossecure.com/"
    },
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    PORTFOLIO_ITEMS.map(({
                        image, title, date, is_github, github_link, is_demo, demo_link
                    }) => {
                        var github_button;
                        var demo_button;

                        if (is_github) {
                            github_button = <a href={github_link} className='btn-portfolio'>Github</a>;
                        } else {
                            github_button = null; // show no github button
                        }

                        if (is_demo) {
                            demo_button = <a href={demo_link} className='btn-portfolio'>Demo</a>;
                        } else {
                            demo_button = null; // show no demo button
                        }

                        return (
                            <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt="portfolio-image-1" />
                                </div>
                                <h3>{title}</h3>
                                <div className="date">
                                    <small>{date}</small>
                                </div>
                                <div className="portfolio__buttons">
                                    {github_button}
                                    {demo_button}
                                </div>
                            </article>
                        )
                    })
                }
            </div>

            <h3>Personal Website Evolution</h3>
            <div className="container portfolio__container">
                {
                    PERSONAL_WEBSITES.map(({
                        image, title, date, is_github, github_link, is_demo, demo_link
                    }) => {
                        var github_button;
                        var demo_button;

                        if (is_github) {
                            github_button = <a href={github_link} className='btn-portfolio'>Github</a>;
                        } else {
                            github_button = null; // show no github button
                        }

                        if (is_demo) {
                            demo_button = <a href={demo_link} className='btn-portfolio'>Demo</a>;
                        } else {
                            demo_button = null; // show no demo button
                        }

                        return (
                            <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt="portfolio-image-1" />
                                </div>
                                <h3>{title}</h3>
                                <div className="date">
                                    <small>{date}</small>
                                </div>
                                <div className="portfolio__buttons">
                                    {github_button}
                                    {demo_button}
                                </div>
                            </article>
                        )
                    })
                }
            </div>

            <h3>Industry Projects</h3>
            <div className="container portfolio__container">
                {
                    INDUSTRY_PROJECTS.map(({
                        image, title, date, is_github, github_link, is_demo, demo_link
                    }) => {
                        var github_button;
                        var demo_button;

                        if (is_github) {
                            github_button = <a href={github_link} className='btn-portfolio'>Github</a>;
                        } else {
                            github_button = null; // show no github button
                        }

                        if (is_demo) {
                            demo_button = <a href={demo_link} className='btn-portfolio'>Demo</a>;
                        } else {
                            demo_button = null; // show no demo button
                        }

                        return (
                            <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt="portfolio-image-1" />
                                </div>
                                <h3>{title}</h3>
                                <div className="date">
                                    <small>{date}</small>
                                </div>
                                <div className="portfolio__buttons">
                                    {github_button}
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
