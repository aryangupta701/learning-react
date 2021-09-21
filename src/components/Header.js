import React from 'react'
import PropTypes from 'prop-types'
//function bases component 
const Header = (props) => {
    return (
        <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        </div>
    )
}

export default Header
