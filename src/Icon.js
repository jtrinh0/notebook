import React from 'react'
import { Row, Col } from 'antd'
import { Heart, Bookmark, Facebook, Twitter } from './Heart'
import { HeartCounter, ToggleBookmark } from './Count'

export const Icon = () => <Row style = {
    {
        width: "15%",
        height: "70px"
    }
} >
    <Col span="10">
         <HeartCounter/>
    </Col>

    <Col span="10">
        <ToggleBookmark/>
    </Col>

    <Col span="10">
        <Facebook/>
    </Col>

    <Col span="10">
        <Twitter/>
    </Col>

</Row>