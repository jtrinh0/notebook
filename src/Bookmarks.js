import React from 'react'

export const Bookmarks = ({store}) => <div style = {
    {
        paddingLeft: "280px",
        paddingTop: "20px",
        paddingBottom: "50px",
        textAlign: "left"
    }
}>
<ul style={{color: "#3572BD"}}>
    <li onClick = {()=>store.route="home"}>"7 Signs You're in the Right Relationship"</li>
</ul>
</div>