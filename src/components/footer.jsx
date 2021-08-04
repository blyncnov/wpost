import React from 'react'
import Navbardata from '../data/navbarData'

import { FooterContainer, FooterColumn } from "../styles/footerStyle"

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterColumn>
                    <h2><span>24</span>Need</h2>
                    <ul>
                        <br />
                        {Navbardata.map((list) => {
                            return (
                                <div key={list.id}>
                                    <li ><a href="/">{list.name}</a></li>
                                </div>
                            )
                        })}
                    </ul>
                    <br />
                    <div>
                        <h6><a href="http://blyncnov.netlify.app">Design by Blyncnov</a></h6>
                    </div>
                </FooterColumn>
            </FooterContainer>
        </div>
    )
}

export default Footer
