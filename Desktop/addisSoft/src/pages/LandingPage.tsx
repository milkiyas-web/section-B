/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Button from '../components/ui/Button'
import Navbar from '../components/Navbar'
const h1 = css`
    color: white
`
const LandingPage = () => {
    return (
        <div
            css={css`
          background: rgb(27,30,35);
background: linear-gradient(68deg, rgba(27,30,35,1) 50%, rgba(73,103,109,1) 100%);
            width: 100vw;
            height: 100vh;
            overflow-x: hidden;
            overflow-y: hidden;

            `}
        >
            <Navbar />
        </div>
    )
}

export default LandingPage