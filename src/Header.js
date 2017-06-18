import React from 'react'
import { Row, Col, Tooltip } from 'antd'
import circleprofile from './circle profile.png'

export const Header = ({title, store}) => <Row style = {
    {
        width: "100%", 
        height: "150px",
        borderBottom: "2px solid #3572BD",
    }
} >

    <Col span="3"><br/><br/>
        <Tooltip placement="right" title={<div><b>Jessica Trinh</b><br/>Travel, relationships, poetry<br/>381 followers &nbsp;·&nbsp; 22 articles<br/></div>}>
    <img src={circleprofile} className="App-logo" alt="logo" onClick = {()=>store.route="about"}/>
        </Tooltip></Col>

    <Col span="11" style = {{textAlign: "left", paddingLeft: "70px", fontFamily: "Arial, sans-serif", color: "#5C5C5C", fontSize: "35px", lineHeight: "150px"}}>
        {title}
    </Col>

</Row>