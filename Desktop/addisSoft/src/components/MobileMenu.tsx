/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { Menu, X } from "lucide-react"
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

interface navItemsTypes {
    title: String,
    url: String
}
const navItems = [
    {
        title: "Features",
        url: "/features"
    },
    {
        title: "About us",
        url: "/about"
    },
    {
        title: "Pricing",
        url: "/pricing"
    },
    {
        title: "Login",
        url: "/login"
    }
]
const containerStyles = css` 
  display: block;
  @media (min-width: 768px) {
    diplay: none;
  }
`
const navItemsStyles = css`
  position: absolute;
  left-0;
  background: white/60
  backdrop-blur-lg
  border-
`
const ulStyles = css`
  display: flex-col;
  padding: 1rem;
  align-items: center;
`

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div css={containerStyles}>
            {
                !isOpen ? (
                    <button onClick={() =>
                        setIsOpen(true)}>
                        <Menu size={32} />
                    </button>
                ) : (
                    <>
                        <button onClick={() => setIsOpen(false)}>
                            <X size={32} />
                        </button>
                        <div css={navItemsStyles}>
                            <ul css={ulStyles}>
                                {navItems.map((item, index) => (
                                    <Link to={item.url} key={index}>
                                        {item.title}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default MobileMenu