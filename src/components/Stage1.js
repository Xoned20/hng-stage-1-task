import React from "react"
import { Link } from "react-router-dom"
import profileImg from "../images/profile__img.png"
import Slack from "../images/slack.png"
import Github from "../images/github.png"
import Icon from "../images/Icon.png"

function Stage1() {
    return(
        <div className="Stage1Web">
            <div className="stage1">
                <div className="main__section">
                    {/* profile section */}
                    <section className="profile">
                        <img
                            id="profile__img"
                            src={profileImg}
                            alt=""
                        />        
                        <p id="twitter">
                        Annette Black
                        </p>
                        <p id="slack">
                        {/* Xoned */}
                        </p>
                        <div className="shareButton">
                            <div className="shareContent">
                                <div className="share">
                                    <img
                                        className="icon"
                                        src={Icon}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>   
                    </section>
                    {/* profile section ends */}

                    {/* links section */}
                    <section className="links">
                        <button id="btn__zuri"><a href="https://twitter.com/Xoneeed">Twitter Link</a></button>
                        <button><a href="https://training.zuri.team/">Zuri Team</a></button>
                        <button id="books"><a href="http://books.zuri.team/">Zuri Books</a></button>
                        <button id="book__python"><a href="https://books.zuri.team/python-for-beginners?ref_id=Xoned">Python Books</a></button>
                        <button id="pitch"><a href="https://background.zuri.team/">Background Check for Coders</a></button>
                        <button id="book__design"><a href="https://books.zuri.team/design-rules">Design Books</a></button>
                        <button id="contact"><Link to='/contact'>Contact Me</Link></button>
                    </section>
                    {/* links section ends */}
                </div>
                
                <div className="social">
                    <div className="social__container">
                        <div className="social__content">
                            <div className="social__icon">
                                <img
                                src={Slack}
                                alt=""
                                />
                                <img
                                src={Github}
                                alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stage1