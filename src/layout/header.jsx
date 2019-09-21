import React from "react"
import { css, cx } from "linaria"

import { Link } from "gatsby"

import { min, max } from "../utils/media"

import Button from "../components/button"

import Nav from "../components/nav"

import PropTypes from "prop-types"


const stylesHeader = css`
    display:grid;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
    height:100%;
    grid-template-columns:1fr 1fr;
    grid-template-areas:"logo cta burger" "nav nav nav";

    ${max(1085, `
        padding:.775rem 8vw;
        grid-template-rows:60px auto;
        z-index:8;
    `)}

    ${min(768, `
        padding:.775rem 4vw
    `)}

    ${min(1085, `    
        grid-template-columns:1fr auto 2fr;
        grid-template-areas:"logo nav nav";
        padding:0 4vw
    `)}

    ${min(1522, `   
        max-width:87.5rem;
        padding:0
    `)}

    ${max(768, `
        grid-template-rows:44px auto
    `)}
`
const styles = {

    // Logo
    log: css`
        grid-area: logo;
        z-index: 8;
    `,
    logoImg: css`
        max-width: 6.25rem;
        height: 30px;
        margin-top: .5rem;
    `,
}

const Logo = () => {
    return <div className={ styles.logo }>
        <Link to="/" >
            <img className={ styles.logoImg } src="https://avatars2.githubusercontent.com/u/44012811?s=200&v=4" />
        </Link>
    </div>
}


const menus = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Services',
        href: '/services',
        items: [
            {
                title: 'Golang turorials',
                href: '/golang',
            },
            {
                title: 'Frontend from zero',
                href: '/fronend',
            }
        ]
    },
    {
        title: 'Blog',
        href: '/blog'
    }
]

const Right = ( { children } ) => {
    return <div className={ styles.right }>
        <Button className={ styles.bigContact } text="Estimate project" />
        {children}
    </div>
}

const Header = ({ onToggle }) => {
    return <div className={ stylesHeader }>
        <Logo />
        <Nav onToggle={ onToggle } />
    </div>
}

Header.propTypes = {
    menuOpend: Boolean,
    onToggle: Function,
}

export default Header