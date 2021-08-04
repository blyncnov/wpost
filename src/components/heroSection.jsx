import React from 'react'


// import  styled components here
import { HeroContainer, HeroColumn, HeroRow, HeroTextBox, HeroButton, HeroImage } from "../styles/heroStyle"
// import  Image  here


const HeroSection = ({ data }) => {
    return (
        <>
            <HeroContainer>
                <HeroColumn direction={data.direction} rev={data.dirx} >
                    <HeroRow >
                        <HeroTextBox>
                            <h2>{data.title}</h2>
                            <h4>{data.desc} </h4>
                            <p>{data.paragraph}</p>
                            <HeroButton>
                                <button>{data.button1}</button>
                                <button>{data.button2}</button>
                            </HeroButton>
                        </HeroTextBox>
                    </HeroRow>
                    <HeroRow >
                        <HeroImage>
                            <img src={data.img} alt="heroimage" />
                        </HeroImage>
                    </HeroRow>
                </HeroColumn>
            </HeroContainer>

        </>
    )
}

export default HeroSection
