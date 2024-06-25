"use client";
import React, { useEffect } from "react";
import "./Footer.css"
export default function Footer(){

    const resList=['Calculator',
        'Article',
        'List of all life policies',
        'list of all companies',
        'Privacy policy',
        'Terms and conditions',
        'Site map',
        'About us']
    const resListArr= resList.map(listText =>{
    return (
    <li className="resText">{listText}</li>
    )
    })

    const contactInfo=['Bafal, Kathmandu',
        '+977-982137877123124124',
        'Click to Email Us',
        'Sun-Fri 9:00AM - 06:00PM']
    const contactInfoArr= contactInfo.map(listText =>{
    return (
    <li className="conText">{listText}</li>
    )
    })

    const followList= [
        "fa-brands fa-square-facebook" ,
        "fa-brands fa-linkedin" ,
        "fa-brands fa-square-instagram" ]
    const followListArr= followList.map(listIcon =>{
        return (
            <FontAwesomeIcon icon={listIcon} />
        )
        })

    return(
        <div id="footerContainer">
            <div id="upperContent">
                <div id="resources">
                    <div id="resourcesCard">
                            <h3 className="resText">Resources</h3>
                            {resListArr}
                    </div>
                </div>
                <div id="contact">
                    <div id="contactInfo" className="contactEl">
                        <div id="contInfoContainer">
                            <h5 className="conText">Contact Info</h5>
                            {contactInfoArr}
                        </div>
                    </div>
                    <div id="followUs" className="contactEl">
                        <span>Follow us on : </span>
                        {followListArr}
                    </div>
                </div>
                <div></div>
            </div>
            <div id="lowerContent">

            </div>
        </div>
    );
}