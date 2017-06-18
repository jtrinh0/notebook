import React from 'react'
import { FAicon } from './FAicon'
/*import { observable } from 'mobx'
import { observer } from 'mobx-react'

const originalHeart = "heart-o"
const state = observable({type: originalHeart})

const changeHeart = () => {
    if (state.type = originalHeart) {
        state.type = "heart"
    } else {
        state.type = originalHeart
    }
}

export const Heart = observer(() => {
    return <div>
    <div onClick={changeHeart}><FAicon type = {"heart-o"}/></div>{state.type}
    </div>
})*/

export const Heart = () => <FAicon type = {
    "heart-o"
}>
</FAicon>

export const Bookmark = () => <FAicon type = {
    "bookmark-o"
}>
</FAicon>

export const Facebook = () => <FAicon type = {
    "facebook"
}>
</FAicon>

// <script type="text/javascript" async src="https://platform.twitter.com/widgets.js"></script>
export const Twitter = () => <a href="https://twitter.com/intent/like?tweet_id=463440424141459456"><a href="https://twitter.com/intent/tweet?in_reply_to=463440424141459456"><a href="https://twitter.com/intent/retweet?tweet_id=463440424141459456"><FAicon type = {
    "twitter"
}>
</FAicon></a></a></a>

export const HeartFill = () => <FAicon style = {{color: "pink"}} type = {
    "heart"
}>
</FAicon>

export const BookmarkFill = () => <FAicon type = {
    "bookmark"
}>
</FAicon>