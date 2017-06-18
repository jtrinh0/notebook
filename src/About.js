import React from 'react'
import { Row, Col } from 'antd'
import { Description } from './Description'
import { Categories } from './Categories'

export const About = ({store}) => <div style = {
    {
        fontSize: "18px",
        fontFamily: "sans-serif"
    }
}>
<Description store={store}/>
<Categories store={store}/>
</div>