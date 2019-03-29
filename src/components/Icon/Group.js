import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd';

const IconGroup = (props) => {
  return (
    <span style={props.style}>
    { props.types.map( i => <Icon style={{marginRight:10}} type={i} key={i} theme="filled" />) }
    </span>
  )
}

IconGroup.propTypes = {
    types:PropTypes.array,
    style:PropTypes.object
}

export default IconGroup