"use client";
import React,{useEffect} from "react";
import "./Nav.css";
export default function Nav(){
    useEffect(()=>{
        const moon =document.getElementById("moonContainer");

        const engLang =document.getElementById("engLang"); 

        const moreOptions =document.getElementById("moreOptions");
        
        const optionState =document.querySelector("optionState");

        moon.addEventListener('click', ()=>{
            moon.parentElement.style.backgroundColor='#476CB2';
            moon.parentElement.children[1].style.transform="translate(-1.5vw, 0)";
        });
        moon.parentElement.children[2].addEventListener('click', ()=>{
            moon.parentElement.style.backgroundColor='#BDCEEF';
            moon.parentElement.children[1].style.transform='translate(1.3vw, 0)';
        });

        engLang.addEventListener('click', ()=>{
            engLang.style.color='#EFEFEF';
            engLang.parentElement.children[1].style.transform="translate(-2.7vw, 0)";
            engLang.parentElement.children[2].style.color='#476BB1';
        });
            engLang.parentElement.children[2].addEventListener('click', ()=>{
            engLang.parentElement.children[2].style.color='#EFEFEF';
            engLang.parentElement.children[1].style.transform="translate(3.1vw, 0)";
            engLang.style.color='#476BB1';
        });
        let toggleNum = 1;
        moreOptions.addEventListener('click', ()=>{
            if(toggleNum == 1){
                moreOptions.children[0].style.rotate="45deg";
                moreOptions.children[0].style.transform="translate(0, 1.6vh)";

                moreOptions.children[1].style.opacity="0";

                moreOptions.children[2].style.rotate="-45deg";
                moreOptions.children[2].style.transform="translate(0, -1.6vh)";
                toggleNum = 0;
            }
            else {
                moreOptions.children[0].style.rotate="0deg";
                moreOptions.children[0].style.transform="translate(0, 0vh)";

                moreOptions.children[1].style.opacity="1";

                moreOptions.children[2].style.rotate="0deg";
                moreOptions.children[2].style.transform="translate(0, 0vh)";
                toggleNum = 1;

            }

        });


    });
    return(
        <nav id="navBar-container">
            <div id="navBar">
            <div className="sideNav leftNav">

            </div>
            <div className="sideNav rightNav">
                <div className="navItem">
                    <div id="engLang" className="langChoice">
                        English
                    </div>
                    <div id="langSelect"></div>
                    <div id="nepLang" className="langChoice">
                    नेपाली
                    </div>
                </div>
                <div className="navItem">
                    <div id="themeContainer">
                        <div className="icon-container" id="moonContainer"> 
                            <img id="moon" src="/Vector 1.png" alt="" />
                        </div>
                        <div id="themeSelector"></div>
                        <div className="icon-container" id="sunContainer">
                            <img id="sun" src="/Polygon 1.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="navItem">
                    <div id="moreOptions">
                        <div className="optionsBar"></div>
                        <div className="optionsBar"></div>
                        <div className="optionsBar"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        </nav>
    );
}