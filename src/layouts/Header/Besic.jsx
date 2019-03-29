import React from 'react'
import Link from 'umi/link';
import { Row, Col, Icon, Dropdown} from 'antd';
////
import Logo from 'assets/Logo.png'
import HeaderMenu from './Menu'
import HeaderSearch from './Search'
import IconGroup from 'components/Icon/Group'


export default class BesicHeader extends React.Component {
  state = {
    ShowSearch:false
  }
  ShowSearch = () => {
    this.setState({ ShowSearch: !this.state.ShowSearch })
  }
  render() {
    return (
      <Row type="flex" justify="space-between">
      {/* PC */}
        <Col xs={0} sm={0} md={0} lg={0} xl={2} xxl={2}>
          <Link to="/login"><img src={Logo} style={{height:21}} alt=""/></Link>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={10} xxl={10}>
          <HeaderMenu location={this.props.location} PC/>
        </Col>
      {/*  移动端显示ICON */}
        <Col xs={12} sm={8} md={11} lg={12} xl={0} xxl={0}>
          <Dropdown overlay={<HeaderMenu location={this.props.location}/>}
                    overlayStyle={{width:"100%",padding:"0 50px"}}
                    trigger={['click']}>
            <Icon type="bars" style={{ fontSize: '18px', color: '#fff', lineHeight: "40px" }}/>
          </Dropdown>
        </Col>
        <Col xs={0} sm={0} md={10} lg={10} xl={10} xxl={10}>
          <div style={{fontSize:13,color:"#fff",textAlign:"right"}}>
            <IconGroup types={["facebook","github","instagram","slack-square","wechat","mail"]} 
                        style={{fontSize:13,color:"#fff",textAlign:"right"}}/>
          </div>
        </Col>
        <Col xs={12} sm={12} md={3} lg={2} xl={2} xxl={2}>
          <HeaderSearch onClick={this.ShowSearch} visable={this.state.ShowSearch}/>
        </Col>
      </Row>
    );
  }
}