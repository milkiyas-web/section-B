/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import Button from "./ui/Button"

const heroContainer = css`
  display: flex;
`
const leftHeroStyles = css`
  
`
const rightHeroStyles = css`
`
const Hero = () => {
    return (
        <div css={heroContainer}>
          <div css={leftHeroStyles}>
            <h1>Music is THe Shorthand of Emotion</h1>
            <p>It's our mission at RouteNote to give you the opportunities to take your music as far as you want it to go.</p>
            <div>
            <Button>Get Started</Button>
            <Button>See More</Button>
            </div>
            <div>
                
            </div>
          </div>
          <div css={rightHeroStyles}>

          </div>
        </div>
    )
}

export default Hero