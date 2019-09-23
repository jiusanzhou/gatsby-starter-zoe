import React from 'react'
import PropTypes from "prop-types"

import Nav from '../components/nav'


const _data = {
    menu: [
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
    ],
    action: {
        title: 'Book a call',
        description: <>Get a <strong>free</strong> one-to-one consultation.</>,
        href: '/',
    }
}

const Navv = (props) => <Nav { ..._data } { ...props } />

Navv.propTypes = {
    onToggle: PropTypes.func
}

export default Navv