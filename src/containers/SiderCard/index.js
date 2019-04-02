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
      <IconButton type="facebook" text="FACEBOOK"  />
      <IconButton type="github" text="GITHUB"  />
      <IconButton type="instagram" text="INSTAGRAM"  />
      <IconButton type="slack" text="SLACK"  />
      <IconButton type="wechat" text="WECHAT"  />
      <IconButton type="mail" text="EMAIL"  />
    </div>
  )
}

function archives (yearsData){
  return (
    <List
      dataSource={yearsData}
      renderItem={item =>
        <Text><Link to={`/archives#${item.year}`}>{item.year} ({item.count})</Link></Text>
      }
    />
  )
}

function labels (labels){
  return (
    <List
      dataSource={labels}
      renderItem={item =>
        <Text><Link to={`/labels#${item.id}`}>{item.name} ({item.count})</Link></Text>
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
