import React from 'react'

export const Background = ({text, color, narrow, thick, fontChoice, fontColor, size, alignment, centering, image, children}) => <div style = {
    {
        backgroundColor: color,
        width: narrow,
        height: thick,
        display: 'inline-block'
    }
  } >
      <img src={image} style = {{width:"50%", paddingLeft:"10px", centering:"150px"}} />
      <p style = {{fontFamily: fontChoice, color: fontColor, fontSize: size, textAlign: alignment, lineHeight: centering, paddingLeft: "170px", paddingRight: "30px"}}>{children}</p>
</div>;