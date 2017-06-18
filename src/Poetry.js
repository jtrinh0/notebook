import React from 'react'
import { Row, Col } from 'antd'
import storm from './storm.jpg'
import clouds from './clouds.jpg'
import bird from './bird.jpg'
import tree from './tree.jpg'
import sunflower from './sunflower.jpg'
import flight from './flight.jpg'
import moon from './moon.jpg'
import orb from './orb.jpg'

export const Poetry = ({store}) => <div style = {
    {
        paddingLeft: "280px",
        paddingTop: "20px",
        paddingBottom: "50px",
        textAlign: "left"
    }
}>
<Row>
    <Col span="6">
        <img src={storm} width="90%" onClick = {()=>store.route="along"}/>
    </Col>
    <Col span="5">
        <h3 style={{color: "#3572BD"}} onClick = {()=>store.route="along"}>"All Along"</h3>
        <p>06/15/17<br/>He trudges along a spiny dirt path,<br/>Wind howling<br/>Hysterically against the cavities of his ears,<br/>Rain shattering...</p>
    </Col>
    <Col span="1"/>
    <Col span="6">
        <img src={clouds} width="90%" onClick = {()=>store.route="sky"}/>
    </Col>
    <Col span="5">
        <h3 style={{color: "#3572BD"}} onClick = {()=>store.route="sky"}>"Sky"</h3>
        <p>04/17/17<br/>My first love<br/>Was the sky.<br/>I crane my neck back<br/>And stare up.<br/>The clouds clump together...</p>
    </Col>
</Row>
<br/>
<Row>
    <Col span="6">
        <img src={bird} width="90%" onClick = {()=>store.route="budgerigar"}/>
    </Col>
    <Col span="5">
        <h3 style={{color: "#3572BD"}} onClick = {()=>store.route="budgerigar"}>"Budgerigar"</h3>
        <p>03/08/16<br/>I am a Budgerigar<br/>In the daytime.<br/>Once the sun sets,<br/>I become a Leucistic Hummingbird,<br/>White wings blurring...</p>
    </Col>
    <Col span="1"/>
    <Col span="6">
        <img src={tree} width="90%" onClick = {()=>store.route="loneliness"}/>
    </Col>
    <Col span="5">
        <h3 style={{color: "#3572BD"}} onClick = {()=>store.route="loneliness"}>"Loneliness Beside You"</h3>
        <p>03/08/17<br/>Feeling lonely next to you<br/>Hurts infinitely more than<br/>Feeling lonely by myself.<br/>Something about your eyes<br/>Makes them look worn beyond...</p>
    </Col>
</Row>
<br/>
<Row>
    <Col span="6">
        <img src={orb} width="90%" onClick = {()=>store.route="universe"}/>
    </Col>
    <Col span="5">
        <h3 style={{color: "#3572BD"}} onClick = {()=>store.route="universe"}>"Answers of the Universe"</h3>
        <p>02/10/17<br/>Curiosity:<br/>a bridge of our minds,<br/>inspiring us to challenge<br/>universally accepted truths<br/>about the nature of our...</p>
    </Col>
    <Col span="1"/>
    <Col span="6">
        <img src={moon} width="90%" onClick = {()=>store.route="synesthesia"}/>
    </Col>
    <Col span="5">
        <h3 style={{color: "#3572BD"}} onClick = {()=>store.route="synesthesia"}>"Synesthesia"</h3>
        <p>12/26/26<br/>One could argue<br/>All poets have synesthesia,<br/>Only with words.<br/>When a tangerine touches my taste buds...</p>
    </Col>
</Row>
<br/>
<Row>
    <Col span="6">
        <img src={flight} width="90%" onClick = {()=>store.route="eagle"}/>
    </Col>
    <Col span="5">
        <h3 style={{color: "#3572BD"}} onClick = {()=>store.route="eagle"}>"My Eagle, My Companion"</h3>
        <p>12/20/16<br/>My eagle, my companion:<br/>If the decision was mine,<br/>I'd keep you for a lifetime,<br/>But I cannot bring myself<br/>To hold you captive...</p>
    </Col>
    <Col span="1"/>
    <Col span="6">
        <img src={sunflower} width="90%" onClick = {()=>store.route="honey"}/>
    </Col>
    <Col span="5">
        <h3 style={{color: "#3572BD"}} onClick = {()=>store.route="honey"}>"Find Me, Honey"</h3>
        <p>11/25/16<br/>Monochrome is simpler<br/>Yet we enjoy playing with colors<br/>Feeling every emotion tenfold<br/>And burning with delicate intensity<br/>In the wee hours when everyone...</p>
    </Col>
</Row>
</div>