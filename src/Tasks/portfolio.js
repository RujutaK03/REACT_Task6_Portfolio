import React from 'react'
import ProfilePic from '../Assets/Rujuta_Photo.jpg'
import LinkedIn from '../Assets/linkedin-logo.png'
import GitHub from '../Assets/github-logo.png'
import Gmail from '../Assets/gmail-logo.png'
import Instagram from '../Assets/instagram-logo.jpeg'

function portfolio() {
    return (
        <div>
            <h1> My Portfolio </h1>
            <div className='container'>
                <div>
                    <img className='circle' src={ProfilePic} alt="Profile Pic" />
                    <div className='contact'>
                        <a href='https://www.linkedin.com/in/rujuta-prajakt-kulkarni-70b61b236/' target={"_blank"}>
                            <img className='app-icon' src={LinkedIn} alt="LinkedIn" />
                        </a>
                        <a href='https://github.com/RujutaK03' target={"_blank"}>
                            <img className='app-icon' src={GitHub} alt="GitHub" />
                        </a>
                        <a href='mailto:rujuta30.kulkarni@gmail.com' target={"_blank"}>
                            <img className='app-icon' src={Gmail} alt="Gmail" />
                        </a>
                        <a href='https://www.instagram.com/rujutak_03/' target={"_blank"}>
                            <img className='app-icon' src={Instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>
                <div className='content'>
                    <p className='title'> Hi! I'm Rujuta Kulkarni </p>
                    <p> I'm a pre-final year student at Vellore Institute of Technology, Chennai, <br /> pursuing B.Tech in Computer Science and Engineering. <br /> I'm interested in Software Development and Data Science.</p>

                    <p className='row'><span className="bold-style"> Skills </span></p>
                    <p className='row'><span className="bold-style">Languages :</span> Python, Java, C++, C</p>
                    <p className='row'> <span className="bold-style">Tools : </span>MySQL, RStudio, GitHub, Microsoft Office 365 </p>
                    <p className='row'> <span className="bold-style">Soft Skills : </span> Leadership, Communication, Punctual, Hardworking, Time Management </p>
                    <p className='row'> <span className="bold-style">Spoken Languages : </span> English, Hindi, Marathi, Korean (Beginner) </p>

                    <hr />

                    <p className='row'><span className="bold-style"> Experience </span></p>
                    <p className='row'><span className="bold-style"> MERN Fullstack Trainee [ Ethnus Codeminthra ] </span></p>
                    <p className='row'> As a trainee under this internship, I gained insight into the basics of HTML, CSS, Javascript & Bootstrap. I learnt the MERN stack and implemented the same in an assigned project. </p>
                    <p className='row'> <span className="bold-style"> Women Engineers (WE) Scholar, Cohort 4 [ Talentsprint, Google ] </span></p>
                    <p className='row'> As a part of this 2-year gender inclusive program, I got the opportuity to upskill my coding skills, gain insight into the etiquette & norms of corporate world, and interact with some talented people at Google. Additionally, I gained hands-on experience at the 3-week bootcamp held in IIIT Hyderabad & visited Google's Hyderabad Office </p>

                </div>
            </div>
        </div>
    )
}

export default portfolio
