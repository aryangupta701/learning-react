import React from 'react'
import PropTypes from 'prop-types'
//function bases component 
const headerstyle={
    backgroundColor: 'green',

}
const Header = (props) => {
    return (
        <div style={headerstyle}>
        <h1>{props.name}</h1>
        </div>
    )
}
Header.propTypes={
    name: PropTypes.string.isRequired,
}
export default Header
