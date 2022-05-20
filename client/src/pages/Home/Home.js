import React from "react"
import StyledHome from "./Home.styled";
// icons
import logo from '../../assets/logo.svg'
import { LinkedinSquare, Github } from '@styled-icons/boxicons-logos'
import { Briefcase } from '@styled-icons/boxicons-solid'
import { ArrowUpRight } from '@styled-icons/octicons'
// images
import profile from '../../assets/profileimage.jpg'
import workThumb from '../../assets/work/work-placeholder.jpg'
// components
import { Pill } from '../../components'

const Home = props => {

    return (
        <StyledHome>
            <div className='header'>
                <img src={logo} className='logo' alt="logo" />
                <div className='text'>
                    <h2>Hi. I am Cameron,<br/>a fullstack web developer<br/>and UI/UX designer.</h2>
                </div>
                <div className='pills'>
                    <Pill icon={ <LinkedinSquare/> } text='kameroncirby' link='https://www.linkedin.com/in/kameroncirby/'/>
                    <Pill icon={ <Github/> } text='cameron-kirby' link='https://github.com/cameron-kirby'/>
                    <Pill icon={ <Briefcase/> } text='resume' link='https://github.com/cameron-kirby'/>
                </div>
            </div>
            <div className='content'>
                <div className='about'>
                    <div className='column-heading'>
                        About
                    </div>
                    <div className='column-article'>
                        <img src={profile} alt='cameron kirby'/>
                        <p>
                            Hello there! I'm Cameron 👋<br/>A Chicago-based fullstack web developer
                            and UI/UX designer.
                        </p>
                        <p>
                            As a (UX) designer, I love working with agile methodologies 
                            in the whole lifecycle of a product in collaboration with 
                            the product manager and the developers : organizing workshops, 
                            listening to our users an shaping with them the tool they will use every day.
                        </p>
                    </div>
                </div>
                <div className='work'>
                    <div className='column-heading'>
                        Work
                    </div>
                    <div className='column-project'>
                        <img src={workThumb} alt="thumbnail" />
                        <div className='project-details'>
                            <h3 className='project-title'>Project title</h3>
                            <div className='project-tags'>React.js — Node.js</div>
                            <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non aliquet mi. In iaculis, magna quis iaculis mattis, nulla odio hendrerit mi, in ultrices quam augue vulputate eros. Aliquam tincidunt urna at magna mattis, quis hendrerit purus rutrum. Donec a leo varius, tincidunt diam tempor, accumsan nulla. Integer tincidunt magna eget eros tempus, eget dignissim mi sodales. Integer lobortis aliquam nunc non condimentum. Morbi eget facilisis massa, id ultricies felis.</p>
                            <a href='https://github.com/cameron-kirby' target='_blank' rel='noreferrer' className='project-link'>
                                <div>Read more</div>
                                <ArrowUpRight/>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    <div className='column-project'>
                        <img src={workThumb} alt="thumbnail" />
                        <div className='project-details'>
                            <h3 className='project-title'>Project title</h3>
                            <div className='project-tags'>React.js — Node.js</div>
                            <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non aliquet mi. In iaculis, magna quis iaculis mattis, nulla odio hendrerit mi, in ultrices quam augue vulputate eros. Aliquam tincidunt urna at magna mattis, quis hendrerit purus rutrum. Donec a leo varius, tincidunt diam tempor, accumsan nulla. Integer tincidunt magna eget eros tempus, eget dignissim mi sodales. Integer lobortis aliquam nunc non condimentum. Morbi eget facilisis massa, id ultricies felis.</p>
                            <a href='https://github.com/cameron-kirby' target='_blank' rel='noreferrer' className='project-link'>
                                <div>Read more</div>
                                <ArrowUpRight/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='skills'>
                    <div className='column-heading'>
                        Skills
                    </div>
                    <div className='column-article'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non aliquet mi. In iaculis, magna quis iaculis mattis, nulla odio hendrerit mi, in ultrices quam augue vulputate eros. Aliquam tincidunt urna at magna mattis, quis hendrerit purus rutrum. Donec a leo varius, tincidunt diam tempor, accumsan nulla. Integer tincidunt magna eget eros tempus, eget dignissim mi sodales. Integer lobortis aliquam nunc non condimentum. Morbi eget facilisis massa, id ultricies felis.
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <span>Made with love with React.js</span>
                <span>Special thanks.</span>
            </div>
        </StyledHome>
    )
}

export default Home;