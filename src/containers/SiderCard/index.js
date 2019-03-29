import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import Link from 'umi/link'
////
import { SiderCard } from 'components/Card'
import { Text } from 'components/Typo'
import { IconButton } from 'components/Icon'

function aboutMe (){
  return (
    <React.Fragment>
        <img width="100%" alt="ll" style={{marginBottom:24}}
              src="https://avatars1.githubusercontent.com/u/19487327?s=460&v=4"/>
        <Text center font="normal normal 13px Open Sans" color="#343434" lineHeight="26px">
          <Link to="/about">MORE</Link>
        </Text>
    </React.Fragment>
  )
}

function followMe (){
  return (
    <div>
      <IconButton type="facebook" text="FACEBOOK" href="https://github.com/" />
      <IconButton type="github" text="GITHUB" href="https://github.com/" />
      <IconButton type="instagram" text="INSTAGRAM" href="https://github.com/" />
      <IconButton type="slack" text="SLACK" href="https://github.com/" />
      <IconButton type="wechat" text="WECHAT" href="https://github.com/" />
      <IconButton type="mail" text="EMAIL" href="https://github.com/" />
    </div>
  )
}

function archives (yearsData){
  return (
    <List
      dataSource={yearsData}
      renderItem={item =>
        <Text>{item.year}({item.count})</Text>
      }
    />
  )
}

function labels (labels){
  return (
    <List
      dataSource={labels}
      renderItem={item =>
        <Text>{item.name}</Text>
      }
    />
  )
}

const SiderCards = props => {
  return (
    <React.Fragment>
      <SiderCard title={props.title}>
        {{
          "ABOUT ME":(aboutMe()),
          "FOLLOW ME":(followMe()),
          "ARCHIVES":(archives(props.yearsData)),
          "LABELS":(labels(props.labels)),
        }[props.title]}
      </SiderCard>
    </React.Fragment>
  )
}

SiderCards.propTypes = {
    title:PropTypes.string
}

export default SiderCards
