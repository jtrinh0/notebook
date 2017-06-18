import React from 'react'
import { Row, Col, Button } from 'antd'
import squareprofile from './square profile.png'
import { BookmarkFill } from './Heart'
    
export const Description = ({store}) => <Row style={
    {
        paddingLeft: "270px",
        paddingTop: "20px",
        textAlign: "left"
    }
}>
        <Col span="3">
            <img src={squareprofile} width="90%"/>
        </Col>
        <Col span="6">
            <h2 onClick = {()=>store.route="bookmarks"}>
                Jessica Trinh&nbsp;&nbsp;&nbsp;<BookmarkFill/>
            </h2>
            <p style={{fontSize: "16px", color: "#B93C65"}}>
                Member since May 2017
            </p>
            <p>
                Creative writer, currently at UC Santa Cruz
            </p>
            <p>
                <b>11</b> Following &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>381</b> Followers 
            </p>
            <Button>Follow</Button>
        </Col>
    </Row>