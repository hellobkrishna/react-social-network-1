import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Photos = (props) => {
    const photoslist = props.data.map((obj, index) => {
        let link = "/p/" + obj.id
        return (<div key={index} className="user-content image is-square"><Link to={link}><img src={obj.image}/></Link></div>
        ) 
    })
    return(
        <div className="grid">
            {photoslist}
        </div>
    )
}

export default Photos;