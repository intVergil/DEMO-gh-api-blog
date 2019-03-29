import React from 'react'
import classNames from 'classnames'
import styles from './Text.less'

function padding (props){
    let padding = "";
    if (props.px && props.py){
        padding = `${props.py}px ${props.px}px`
    }else if (props.px){
        padding = `$0 ${props.px}px`
    }else if (props.py){
        padding = `${props.py}px 0`
    }
    return padding
}

function margin (props){
    let margin = "";
    if (props.mx && props.my){
        margin = `${props.my}px ${props.mx}px`
    }else if (props.mx){
        margin = `0 ${props.mx}px`
    }else if (props.my){
        margin = `${props.my}px 0`
    }
    return margin
}

const Typo = (props) => {
    const cx = classNames(
        {
            [styles.is_grey_1]: props.grey1,
            [styles.is_grey_2]: props.grey2,
            [styles.is_grey_3]: props.grey3,
            [styles.is_grey_4]: props.grey4,
            [styles.is_grey_5]: props.grey5,
            [styles.is_grey_6]: props.grey6,
            [styles.is_grey_7]: props.grey7,
            [styles.is_grey_8]: props.grey8,
            [styles.is_grey_9]: props.grey9,
            [styles.is_grey_0]: props.grey0,
        },{
            [styles.is_h1]: props.h1,
            [styles.is_h2]: props.h2,
            [styles.is_h3]: props.h3,
            [styles.is_h4]: props.h4,
            [styles.is_h5]: props.h5,
            [styles.is_h6]: props.h6,
            [styles.is_p]: props.p,
        },{
            [styles.is_right]: props.right,
            [styles.is_center]: props.center,
            [styles.is_justify]: props.justify,
            [styles.is_ellipsis]: props.ellipsis,
        });

    const titleStyle = {}
    
    if(props.font){titleStyle["font"] = props.font}
    if(props.color){titleStyle["color"] = props.color}
    if(props.bg){titleStyle["background"] = props.bg}
    if(props.size){titleStyle["fontSize"] = props.size}
    if(props.weight){titleStyle["fontWeight"] = props.weight}
    if(props.spacing){titleStyle["letterSpacing"] = props.spacing}
    if(props.lineHeight){titleStyle["lineHeight"] = props.lineHeight}
    if(props.mx||props.my)(titleStyle["margin"] = margin(props))
    if(props.px||props.py)(titleStyle["padding"] = padding(props))
    if(props.my===0)(titleStyle["margin"] = "0")

    if(props.span){
        return (<span style={titleStyle} className={cx}>{props.children}</span>)
    }
    return (<p style={titleStyle} className={cx}>{props.children}</p>)

}
  
export default Typo;