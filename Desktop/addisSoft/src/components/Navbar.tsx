/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
const defaultClasses = css`
 transition: all 0.3 ease;
 postion: absolute;
 inset: 0;
 z-index: -1;

`;
const scrolledStyles = css`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-color: rgba(255,255,255,0,75);
  backdrop-filter: blur(10px);
`;
const transparentStyles = css`
    background-color: transparent;
`
const stickyStyle = css`
    position: sticky;
    top: 0;
    z-index: 30;
    width: 100%;
    inset-inline-start: 0;
`
const containerStyle = css`
    margin-inline: auto;
    width: 100%;
    max-width: 1280px;
    padding-inline: 0.625rem;
    padding-inline-start: 5rem;
    padding-inline-end: 5rem;
    position: relative;
`;
const flexStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const navStyles = css`
    display: none;
    @media (min-width: 768px) {
        display: block;
    }
`;

const ulStyles = css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;

`;

const linkStyles = css`
    color: #000;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    &:hover {
        color: #000;
    }
`;
const logoStyles = css`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: sans-serif;
    letter-spacing: 1.5px;
    &:hover {
        color: #000;
    };
    margin-top: 1rem;
`;


const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 0 && !scrolled) {
            setScrolled(true);
        } else if (latest === 0 && scrolled) {
            setScrolled(false);
        }
    });
    return (
        <div css={stickyStyle}>
            <div css={[defaultClasses, scrolled ? scrolledStyles : transparentStyles]}></div>
            <div css={containerStyle}>
                <div css={flexStyle}>
                    <div>
                        <h1 css={logoStyles}>Muskica</h1>
                    </div>
                    <nav css={navStyles}>
                        <ul css={ulStyles}>
                            <li>
                                <Link to="/" css={linkStyles}>About us</Link>
                            </li>
                            <li>
                                <Link to="/" css={linkStyles}>Feature</Link>
                            </li>
                            <li>
                                <Link to="/" css={linkStyles}>Pricing</Link>
                            </li>
                        </ul>
                    </nav>
                    <div css={navStyles}>
                        <Link to="#">
                            <Button>Sign in</Button>
                        </Link>
                        <Link to="#">
                            <Button>Sign up</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar