import React from 'react'
import { Card, Tag , Row } from 'antd';
import router from 'umi/router'
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
////
import { Button } from 'components/Button';
import { Text } from "components/Typo";
import { IconGroup } from 'components/Icon'

const CardStyle = {
  boxShadow: "0px 1px 2px 1px #eee",
  marginBottom: 60,
  padding: "6px 6px 0px 6px",
  overflow: "hidden",
  textAlign:"center"
}

const ConStyle = {
  marginBottom:48,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 10,
  WebkitBoxOrient: "vertical"
}

const Article = props => {
  const { number, title, body, labels, created_at, comments } = props.dataSource
  const createdAt = moment(created_at).format('MMM Do, YYYY')

  return (
    <Card bordered={false} style={CardStyle}>
      <div>
        {labels.map( d => <Tag color="#343434" style={{marginBottom:6}} key={d.id}>{d.name}</Tag>)}
        <Text mx={12} my={12} h2 grey0>{title}</Text>
        <Text mx={12} my={12} h6 grey7>{createdAt} / BY intVergil</Text>
      </div>
      <div style={ConStyle}>
        <Text my={0} justify font="normal normal 13px Open Sans" span>
          <ReactMarkdown source={body}/>
        </Text>
      </div>
      <div style={{marginBottom:24}}>
        <Button theme="black" style={{marginBottom:24,fontSize:10}} 
                onClick={e => router.push(`/blog/${number}`)}>CONTINUE READING</Button>
      </div>
      <Row type="flex" justify="space-between">
        <Text mx={0} my={0} h6 span>{comments} COMMENTS</Text>
        <Text mx={0} my={0} h6 span><IconGroup types={["facebook","wechat","instagram","github","slack-square"]}/></Text>
      </Row>
    </Card>
  )
}

export default Article