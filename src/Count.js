import React from 'react'
import ReactDOM from 'react-dom'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Heart, HeartFill, Bookmark, BookmarkFill } from './Heart'
var originalNumber = 0
const state = observable({counter: originalNumber, icon: "bookmark-o"})
const incrementCounter = () => state.counter = state.counter + 1

const changeIcon = () => {
    const newIcon = state.icon == "bookmark-o" ? "bookmark" : "bookmark-o"
    state.icon = newIcon
}

// const changeColor = () => {
//     const 
// }

export const ToggleBookmark = observer(() => {
    return <div>
        <div onClick={changeIcon}>
            {state.icon == "bookmark-o" ? <Bookmark/> : <BookmarkFill/>}
        </div>
    </div>
})

// export const ToggleBookmark = observer(() => {
//     return <div>
//         <div onClick={changeIcon}>
//             {state.icon == "bookmark-o" ? <Bookmark/> : <BookmarkFill/>}
//         </div>
//     </div>
// })

export const HeartCounter = observer(() => {
    return <div>
        <div onClick={changeCounter}>
            {state.counter == 0 ? <Heart/> : <HeartFill/>}
        </div>{state.counter}
    </div>
})

const changeCounter = () => {
    if (state.counter <= originalNumber) {
        state.counter++
    } else {
        state.counter--
    }
}

// export const ToggleBookmark = observer(React.createClass({
//     changeIcon: function(){
//         var icon = state.icon == "bookmark-o" ? "bookmark" : "bookmark-o"
//         state.icon = icon
//     },
//     render: function() {
//         return (
//                 <div onClick={this.changeIcon}>
//                     {state.icon == "bookmark-o" ? <Bookmark/> : <BookmarkFill/>}
//                 </div>
//         );
//     }
// }))

// var pink = '#D22268'
// var gray = '#575243'
// export const ToggleHeart = React.createClass({
//     getInitialState: function(){
//         return {color: pink};
//     },
//     changeColor: function(){
//         observer(changeCounter)
//         var color = this.state.color == pink ? gray : pink;
//         this.setState({color: color});
//     },
//     render: function() {
//         return (
//             <div style = {{color: this.state.color}}>
//                 <div onClick={this.changeColor}>
//                     <HeartFill/>
//                 </div>{state.counter}
//             </div>
//         );
//     }
// });