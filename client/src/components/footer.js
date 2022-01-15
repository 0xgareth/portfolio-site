import * as React from "react"
import { IconContext } from "@react-icons/all-files";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

const Footer = () => {
    return(
        <footer>

            {/* socials */}
            <div 
                style={{
                position: `absolute`,
                left:`0`,
                bottom:`0`,
                display:`flex`,
                flexDirection:`column`,
                alignItems:`center`,
                padding:`2rem`,
                }}
            >

                <IconContext.Provider value={{ color: "white" }}>
                <div>
                    <FaTwitter className='fa' size={30} />
                </div>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: "white" }}>
                <div>
                    <FaGithubAlt className='fa' size={30} />
                </div>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: "white" }}>
                <div>
                    <FaEnvelope className='fa' size={30} />
                </div>
                </IconContext.Provider>
            </div>
            <div 
                style={{
                position: `absolute`,
                right:`0`,
                bottom:`0%`,
                display:`flex`,
                flexDirection:`column`,
                alignItems:`center`,
                padding:`2rem`,
                zIndex:`5`,
                }}
            >
                {/* <p style={{color:`white`}}>test</p> */}

                <div className="animated-circle-text">
                    <svg className='animated-circle-text-svg' viewBox="0 0 244.1 244.1">
                    <path id="circlePath" d="M226.6,122.1c0,57.7-46.8,104.5-104.5,104.5S17.6,179.8,17.6,122.1S64.4,17.6,122.1,17.6
                        S226.6,64.4,226.6,122.1z" fill="transparent" />
                    <text className='animated-circle-font'>
                        <textPath  xlinkHref="#circlePath">
                        GET IN TOUCH FOR COLLABORATIONS  
                        </textPath>
                    </text>
                    </svg>
                </div>
            </div>
        </footer>

)}

export default Footer