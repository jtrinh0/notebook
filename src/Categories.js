import React from 'react'
import { Row, Col } from 'antd'
import balloons from './balloons.jpg'
import articles from './articles.jpg'
import poetry from './poetry.jpg'

export const Categories = ({store}) => <Row style={{textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>
    <Col span="4"/>
    <Col span="6">
    <h3 onClick = {()=>store.route="travel"}>Travel</h3>
    <img src={balloons} width="70%" onClick = {()=>store.route="travel"}/>
    <p>
        World traveler since 2001
    </p>
    </Col>
    <Col span="6">
    <h3 onClick = {()=>store.route="relationships"}>Relationships</h3>
    <img src={articles} width="70%" onClick = {()=>store.route="relationships"}/>
    <p>
        Personal stories and advice
    </p>
    </Col>
    <Col span="6">
    <h3 onClick = {()=>store.route="poetry"}>Poetry</h3>
    <img src={poetry} width="70%"onClick = {()=>store.route="poetry"}/>
    <p>
        Collaborative poetry project written by Jess and illustrated by Jackson
    </p>
    </Col>
</Row>