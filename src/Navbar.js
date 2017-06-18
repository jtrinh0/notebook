import React from 'react'

export const Navbar = ({store}) => <div style = {
    {
        position: "relative",
        backgroundColor: "#4B2F13",
        width: "100%",
        height: "100",
        zIndex: "2"
    }
  } >
      <p className = "login" onClick = {()=>store.route="authenticate"}>
          Sign In / Sign Up
      </p>
</div>;