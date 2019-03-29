import { Menu } from 'antd';
import Link from 'umi/link';
import React from 'react'
import PropTypes from 'prop-types'

const BesicMenu = props => {
    return (
        <Menu theme="dark" 
            selectable={false}
            mode={ props.PC ? "horizontal" : "inline"}
            style={ props.PC ? {height:50,lineHeight:"50px"} : null}
        >
            <Menu.Item key="home">
                <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item key="archives">
                <Link to="/archives">ARCHIVES</Link>
            </Menu.Item>
            <Menu.Item key="labels">
                <Link to="/labels">LABLES</Link>
            </Menu.Item>
            <Menu.Item key="about">
                <Link to="/about">ABOUT</Link>
            </Menu.Item>
        </Menu>
    )
}

BesicMenu.propTypes = {
    PC:PropTypes.bool,
}

export default BesicMenu
