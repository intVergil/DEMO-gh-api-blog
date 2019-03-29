import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

const titleStyle = {
  fontSize: 11,
  color: "#fff",
  margin: "auto",
}

const headStyle = {
  background:"black",
  textAlign:"center",
  height:48,
  lineHeight:"14px"
}

const SiderCard = (props) => {
  return (
    <Card title={<span style={titleStyle}>{props.title}</span>} 
          headStyle={headStyle}
          bodyStyle={{padding:"24px 30px"}}
          style={{marginBottom:36}}
          bordered={false}
    >
      { props.children }
    </Card>)
}

SiderCard.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default SiderCard;
