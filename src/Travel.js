import React from 'react'

export const Travel = ({store}) => <div style = {
    {
        paddingLeft: "200px",
        paddingTop: "20px"
    }
}>
    <ul style={{color: "#3572BD"}}>
        <li>United States</li>
        <li>Vietnam</li>
        <li>Thailand</li>
        <li>Canada</li>
        <li>France</li>
        <li>Belgium</li>
        <li>Costa Rica</li>
        <li>Puerto Rico</li>
        <li>Jamaica</li>
        <li>Grand Cayman</li>
        <li>Dominican Republic</li>
        <li>Mexico</li>
        <li onClick = {()=>store.route="japan"}>Japan</li>
    </ul>
</div>