import React from 'react'
import { Row, Col } from 'antd'
import sunflower from './sunflower.jpg'
import flight from './flight.jpg'
import moon from './moon.jpg'
import orb from './orb.jpg'

export const PoemPics = ({pictureleft, storeleft, nameleft, descriptionleft, pictureright, storeright, nameright, descriptionright}) => <div>
    <Row>
    <Col span="6">
        <img src={pictureleft} width="90%" onClick = {()=>store.route={storeleft}}/>
    </Col>
    <Col span="4">
        <h3 style={{color: "#3572BD"}} onClick = {()=>store.route={storeleft}}>"{nameleft}"</h3>
        <p>{descriptionleft}...</p>
    </Col>
    <Col span="2"/>
    <Col span="6">
        <img src={pictureright} width="90%" onClick = {()=>store.route={storeright}}/>
    </Col>
    <Col span="4">
        <h3 style={{color: "#3572BD"}} onClick = {()=>store.route={storeright}}>"{nameright}"</h3>
        <p>{descriptionright}...</p>
    </Col>
</Row>
<br/>
</div>