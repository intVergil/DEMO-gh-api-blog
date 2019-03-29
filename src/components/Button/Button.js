import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button } from 'antd'
////
import styles from './button.less'

const arr = ["disabled","ghost","href","htmlType","icon","loading","shape","target","onClick","block"]

const MyButton = (props) => {

  const propsCopy = {};
  arr.forEach(x => (x in props) ? propsCopy[x] = props[x] : null)

  const cx = classNames({
    [styles.black]: props.theme==='black',
    [styles.dark] : props.theme==='dark',
    [styles.link] : props.theme==='link',
    [styles.light]: props.theme==='light',
    [styles.white]: props.theme==='white',
    [styles.disabled]: props.disabled,
    [styles.ghost]: props.ghost,
  },);

  return (
      <Button {...propsCopy} className={cx} style={props.style}>
        {props.children}
      </Button>
  )
}

MyButton.propTypes = {
  theme: PropTypes.string,
  style: PropTypes.object,
}

export default MyButton;