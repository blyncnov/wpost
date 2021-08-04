import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

// import  navbarData here
import { Pre, Logo, Navbardata } from "../data/navbarData"

// import  styled components here
import {
    NavbarContainer,
    NavbarInnerContainer,
    LogoName, List,
    Mobile
} from "../styles/navbarStyle"

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(true)

    const ClickHandler = () => {
        setIsClicked(!isClicked)
    }

    return (
        <>
            <NavbarContainer>
                <NavbarInnerContainer>

                    <LogoName><span>{Pre}</span>{Logo}</LogoName>

                    <List click={isClicked} onClick={ClickHandler}>

                        {Navbardata.map((list) => {
                            return (
                                <div key={list.id}>
                                    <li onClick={ClickHandler}>{list.name}</li>
                                </div>
                            )
                        })}
                    </List>

                    <Mobile onClick={ClickHandler}>
                        {isClicked ? <FaBars style={{ fontSize: "1.5em" }} /> : <FaTimes style={{ fontSize: "1.5em" }} />}
                    </Mobile>

                </NavbarInnerContainer>
            </NavbarContainer>
        </>
    )
}

export default Navbar
