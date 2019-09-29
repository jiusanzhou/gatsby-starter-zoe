import React from "react"
import PropTypes from "prop-types"

import { css } from "linaria"
import { Button } from 'rebass'
import { Link } from "gatsby"


const style = css`
    // background-color: #da3654;
    // box-shadow: 0 9px 60px 0 rgba(218,54,84,.35);
    // box-shadow: 0 0 0 0 rgba(218,54,84,0);
    transition: box-shadow .3s cubic-bezier(0,.89,.44,1),transform .15s cubic-bezier(0,.89,.44,1);
    will-change: box-shadow,transform;
    cursor: pointer;
    &:hover {
        // box-shadow: 0 9px 40px 0 rgba(218,54,84,.65);
        transform: scale(1.03)  translateZ(0);
    }
`

const MButton = ( { children, to, text, className } ) => {
    return <Link to={ to }>
        <Button bg="primary" className={ style }>{ children || text }</Button>
    </Link>
}

MButton.protoTypes = {
    to: PropTypes.String,
    text: PropTypes.String,
    variant: PropTypes.String,
    className: PropTypes.String,
    children: PropTypes.node.isRequired,
}

export default MButton