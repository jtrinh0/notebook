import React from 'react'
import {Button, Row, Col, Card, Breadcrumb, Icon} from 'antd'

export const Antdplayground = ({store}) => <Button onClick={()=>store.route="home"}>Home</Button>
export const Crumbs = () => <a href="mailto:jess.tech@outlook.com?Subject=About%20Jessica's%20Blog%20Post" target="_top"><Breadcrumb.Item><Icon type="mail" style = {{fontSize:"15px"}} /></Breadcrumb.Item>jess.tech@outlook.com</a>
