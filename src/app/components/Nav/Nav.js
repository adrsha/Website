import "./Nav.css";
export default function Nav(){
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
                    <div id="nepLang" className="langChoice">
                        Nepali
                    </div>
                </div>
                <div className="navItem">
                    <div id="themecontainer">
                        <div className="icon-container"> 
                            <img id="moon" src="/Vector 1.png" alt="" />
                        </div>
                        <div id="theme-selector"></div>
                        <div className="icon-container">
                            <img id="sun" src="/Polygon 1.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="navItem"></div>
            </div>
        </div>
        </nav>
    );
}
