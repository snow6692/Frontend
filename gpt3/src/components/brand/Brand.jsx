import React from 'react'
import "./brand.css"
import { google, shopify, slack, atlassian, dropbox } from "./import.js"
function Brand() {
    return (
        <div className='brand section__padding'>
            <div className="">
                <img src={google} alt="google" />
            </div>
            <div className="">
                <img src={slack} alt="slack" />
            </div>
            <div className="">
                <img src={atlassian} alt="atlassian" />
            </div>
            <div className="">
                <img src={dropbox} alt="dropbox" />
            </div>
            <div className="">
                <img src={shopify} alt="shopify" />
            </div>

        </div>
    )
}

export default Brand