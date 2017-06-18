import React from 'react'
import { Row, Col } from 'antd'
import { TextBody } from './TextBody'
import { Heart, Bookmark, Facebook, Twitter} from './Heart'
import { HeartCounter, ToggleBookmark } from './Count'

export const Body = () => <Row style = {
    {
        width: "100%", 
        height: "2000px",
    }
} >

    <Col span="3">
        <br/><br/>
        <HeartCounter/><br/>
        <ToggleBookmark/><br/>
        <Facebook/><br/><br/>
        <Twitter/>
    </Col>

    <Col span="1">
    </Col>

    <Col span="20">
        <TextBody/>
    </Col>

</Row>