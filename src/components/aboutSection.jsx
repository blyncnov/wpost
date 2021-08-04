import React from 'react'

import { IconContext } from "react-icons";
import { FcBookmark, FcCollect, FcOrgUnit } from "react-icons/fc";

// import  styled components here
import { AboutContainer, AboutColumn, AboutRow, AboutBox, AboutTextBox } from "../styles/aboutStyle"

const About = () => {
    return (
        <>
            <IconContext.Provider value={{ size: "4em" }}>
                <AboutContainer>
                    <AboutColumn>
                        <AboutRow>
                            <AboutTextBox>
                                <h4>Our Services and Acknowlegment </h4>
                                <h2>We Offer The Best Services </h2>
                            </AboutTextBox>
                        </AboutRow>
                        <AboutRow white padding>
                            <AboutBox>
                                <FcBookmark style={{ marginBottom: "3em" }} />
                                <h3 >Secured privacy </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium omnis dicta quisquam sed expedita vero quae ipsam odit minima, facilis doloremque, quas animi culpa voluptates eligendi eveniet soluta quod!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium omnis dicta quisquam sed expedita vero quae ipsam odit minima, facilis doloremque, quas animi culpa voluptates eligendi eveniet soluta quod!</p>

                            </AboutBox>
                            <AboutBox>
                                <FcCollect style={{ marginBottom: "3em" }} />
                                <h3>24hours Disposal </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium omnis dicta quisquam sed expedita vero quae ipsam odit minima, facilis doloremque, quas animi culpa voluptates eligendi eveniet soluta quod!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium omnis dicta quisquam sed expedita vero quae ipsam odit minima, facilis doloremque, quas animi culpa voluptates eligendi eveniet soluta quod!</p>

                            </AboutBox>
                            <AboutBox>
                                <FcOrgUnit style={{ marginBottom: "3em" }} />
                                <h3>Terms Aiding </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium omnis dicta quisquam sed expedita vero quae ipsam odit minima, facilis doloremque, quas animi culpa voluptates eligendi eveniet soluta quod!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium omnis dicta quisquam sed expedita vero quae ipsam odit minima, facilis doloremque, quas animi culpa voluptates eligendi eveniet soluta quod!</p>
                            </AboutBox>
                        </AboutRow>
                    </AboutColumn>
                </AboutContainer>
            </IconContext.Provider>
        </>
    )
}

export default About
