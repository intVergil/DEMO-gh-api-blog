import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd';

const aStyle = {
  display: "inline-block",
  border: "1px solid #f0f0f0",
  margin:2,
  padding: "12px 0",
  textAlign: "center",
  width: "31%",
  height:88,
}

const IconStyle = {
  display: "block",
  width: 32,
  height: 32,
  margin: "5px auto",
  lineHeight: "32px",
  textAlign: "center",
  fontSize: 18,
  color: "#444",
}

const IconButton = (props) => {
  return (
    <a style={aStyle} href={props.href} target="_blank" rel="noopener noreferrer">
      <Icon type={props.type} style={IconStyle}/>
      {props.text}
    </a>
  )
}

IconButton.propTypes = {
    type:PropTypes.string,
    text:PropTypes.string,
    href:PropTypes.string,
}

export default IconButton