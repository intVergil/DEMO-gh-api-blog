import React from 'react'
import PropTypes from 'prop-types'
import { Input, Icon } from 'antd'
import QueueAnim from 'rc-queue-anim';

const SearchStyle = {
  height:50,
  lineHeight:"50px",
  width:50,
  textAlign:"center",
  backgroundColor: "#363636",
  margin:"0 0 0 auto"
}

const InputStyle = {
  border:"1px solid #e5e5e5",
  width:190,
  height: 42,
  fontSize: 11,
  color: "#999",
  letterSpacing: 1,
  boxShadow: "0 8px 6px -6px rgba(206,206,206,.2)"
}

const HeaderSearch = props => {
  return (
    <React.Fragment>
      <div style={SearchStyle} onClick={props.onClick}>
        <Icon type="search" style={{fontSize:16,margin:0,color:"#fff"}}/>
      </div>
      <QueueAnim>
        {props.visable &&
          <div key="Search" style={{position:"absolute",right:0,top: 44,height: 42}}>
            <Input  placeholder="comming soon" 
                    onPressEnter={props.onClick}
                    style={InputStyle}/>
          </div>}
      </QueueAnim>
    </React.Fragment>
  )
}

HeaderSearch.propTypes = {
  visable:PropTypes.bool
}

export default HeaderSearch