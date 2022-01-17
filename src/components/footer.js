import * as React from "react"
import { IconContext } from "@react-icons/all-files";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

const Footer = () => {
    return(
        <footer>

            {/* socials */}
            <div className="icons-wrapper">
                <IconContext.Provider value={{ color: "white" }}>
                    <a style={{ textDecoratin:`None` }} href="https://twitter.com/gareth_was_here " target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='fa' size={30} />
                    </a>
                    
                    <a style={{ textDecoratin:`None` }} href="https://github.com/gareth-was-here" target="_blank" rel="noopener noreferrer">
                        <FaGithubAlt className='fa' size={30} />
                    </a>
                    
                    <a style={{ textDecoratin:`None` }} href="mailto:gareth@garethv.xyz" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className='fa' size={30} />
                    </a>
                </IconContext.Provider>
            </div>

            <div className="footer-circle-wrapper">
                <a style={{ textDecoratin:`None` }} href="mailto:gareth@garethv.xyz" target="_blank" rel="noopener noreferrer">
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
                </a>
            </div>
        </footer>

)}

export default Footer