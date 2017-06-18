import React from 'react'
import { Row, Col } from 'antd'
import circleprofile from './circle profile.png'
import balloons from './balloons.jpg'
import articles from './articles.jpg'
import poetry from './poetry.jpg'

export const About = ({store}) => <Row style = {
    {
        fontSize: "18px",
        fontFamily: "sans-serif"
    }
}>
    <Col span="4"/>
    <Col span="6">
    <h3>Travel</h3>
    <img src={balloons} width="70%"/>
    <p>World traveler since 2001<br/>
    <ul style={{color: "#108EE9"}}>
        <li>United States</li>
        <li>Vietnam</li>
        <li>Thailand</li>
        <li>Canada</li>
        <li>France</li>
        <li>Belgium</li>
        <li>Costa Rica</li>
        <li>Puerto Rico</li>
        <li>Jamaica</li>
        <li>Grand Cayman</li>
        <li>Dominican Republic</li>
        <li>Mexico</li>
        <li onClick = {()=>store.route="japan"}>Japan</li>
    </ul>
    </p>
    </Col>
    <Col span="6">
    <h3>Relationships</h3>
    <img src={articles} width="70%"/>
    <p>Personal stories and advice<br/>
    <ul style={{color: "#108EE9"}}>
        <li onClick = {()=>store.route="home"}>"7 Signs You're in the Right Relationship"</li>
    </ul>
    </p>
    </Col>
    <Col span="6">
    <h3>Poetry</h3>
    <img src={poetry} width="70%"/>
    <p>Collaborative poetry project written by Jess and illustrated by Jackson<br/>
    <ul style={{color: "#108EE9"}}>
        <li onClick = {()=>store.route="honey"}>"Find Me, Honey"</li>
        <li onClick = {()=>store.route="eagle"}>"My Eagle, My Companion"</li>
        <li onClick = {()=>store.route="synesthesia"}>"Synesthesia"</li>
        <li onClick = {()=>store.route="universe"}>"Answers of the Universe"</li>
        <li onClick = {()=>store.route="loneliness"}>"Loneliness Beside You"</li>
        <li onClick = {()=>store.route="budgerigar"}>"Budgerigar"</li>
        <li onClick = {()=>store.route="sky"}>"Sky"</li>
        <li onClick = {()=>store.route="along"}>"All Along"</li>
    </ul>
    </p>
    </Col>
</Row>