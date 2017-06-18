import React from 'react'
// import ReactDOM from 'react-dom'
import {Row, Col} from 'antd'
// import {observable} from "mobx"
// import {observer} from "mobx-react"

const FAicon = ({type}) => <i className = {'fa fa-' + type} style = {{fontSize:"30px"}}></i>

var num = 3;

const state = {counter: num}

// const state = observable({counter: originalNumber})

// const incrementCounter = () => state.counter = state.counter + 1

// var Number = React.createClass({
//     getInitialState: function(){
//         return {
//             count: 3
//         };
//     },
//     toggleCounter: function(){
//         var newCount = this.state.count == 
//         if 
//     }
// })


if (state.counter == num) {
    state.counter = state.counter + 1;
} else {
    state.counter = state.counter - 1;
}

// class Number extends React.Component {

var Heart = React.createClass({
    getInitialState: function(){
        return {
            type: "heart-o"
        };
    },
    toggleHeart: function(){
        var newType = this.state.type == "heart-o" ? "heart" : "heart-o";
        this.setState({type: newType});
    },
    render() {
        return (
            <div>
                <button onClick = {this.newType}>Click Heart</button>
            </div>
        );
    }
});

// export default Heart; 


// const changeIcon1 = () => <

// const changeIcon2 = () => <

// var icon1 = () => <Col  {FAicon type = "heart-o"}

export const FavoriteIcons = () => <Row style = {
    {
        width: "15%",
        height: "70px"
    }
} >
    <Col span="10">
         <FAicon type="heart-o" onClick={state.counter} onClick={this.ToggleHeart}><br/>Likes:&nbsp;</FAicon>{state.counter}
    </Col>

    <Col span="10">
        <FAicon type="bookmark-o" ></FAicon>
    </Col>

</Row>

export const SharingIcons = () => <Row style = {
    {
        width: "15%",
        height: "70px"
    }
} >
    <Col span="10">
         <FAicon type="facebook"/>
    </Col>

    <Col span="10">
        <FAicon type="twitter"/>
    </Col>

</Row>