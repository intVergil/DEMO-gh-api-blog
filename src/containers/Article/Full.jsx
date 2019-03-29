import React from 'react'
import { Card, Tag , Row, Icon } from 'antd';
import router from 'umi/router';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
////
import { Text } from "components/Typo";
import { IconGroup } from 'components/Icon'
import ArticleComment from './Comment'

const CardStyle = {
  boxShadow: "0px 1px 2px 1px #eee",
  marginBottom: 60,
  padding: "6px 6px 0px 6px",
  overflow: "hidden",
  textAlign:"center"
}

const Article = props => {
  const { title, body, labels, created_at, html_url } = props.dataSource
  const createdAt = moment(created_at).format('MMM Do, YYYY')

  return (
    <Card bordered={false} style={CardStyle}>
      <div>
        {labels.map( d => <Tag color="#343434" style={{marginBottom:6}} key={d.id}>{d.name}</Tag>)}
        <Text mx={12} my={12} h2 grey0>{title}</Text>
        <Text mx={12} my={12} h6 grey7>{createdAt} / BY intVergil</Text>
      </div>
      <div style={{marginBottom:48}}>
        <Text my={0} justify font="normal normal 13px Open Sans" span>
          <ReactMarkdown source={body}/>
        </Text>
      </div>
      <Row type="flex" justify="space-between"
           style={{marginBottom:48}}>
        <Text mx={0} my={0} h6 span color="#aaa">
          <Icon type="tag" theme="filled" rotate={-90}/> 
          TAGS: {labels.map( (d,index) => index === 0 ? d.name : `, ${d.name}`)}
        </Text>
        <Text mx={0} my={0} h6 span>
          <IconGroup types={["facebook","wechat","instagram","github","slack-square"]}/>
        </Text>
      </Row>
      <div>

      </div>
      <div style={{textAlign:"left"}}>
        <ArticleComment comments={props.comments}/>
      </div>
      <Row type="flex" justify="space-between">
        <Text span><a href={html_url}>Github Link</a></Text>
        <Text span><span onClick={router.goBack} style={{cursor:"pointer"}}>Back</span></Text>
      </Row>
    </Card>
  )
}

export default Article