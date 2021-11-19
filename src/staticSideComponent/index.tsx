import { Styled } from "./index.styles";
import { useState, useEffect, useContext } from "react";
import { titleMenuProps } from "./index.types";
import Dashboard from "../bodyComponents/Dashboard/index";
import userProfileImage from "./userProfileImage.jpg";
import { ConversionComponent } from "../bodyComponents/ConversionChart";
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../App";

export default function StaticSideComponent(titleMenuProps: titleMenuProps) {
    // const fixedHeaderContainer = useRef<HTMLDivElement>(null);
    const fixedHeaderContainer = document.getElementsByClassName("fixed-header-container")[0] as HTMLElement;
    const darkModeConfig = {element: fixedHeaderContainer};
    const darkMode = useDarkMode(false, darkModeConfig);
    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
    const navOptions = titleMenuProps?.titleMenuOptions;
    const [ activeTab, setActiveTab ] = useState(navOptions[0].toLowerCase().replace(/ /g,"-"));

    function setActive(e: any){
        if (e?.type==="click" || e?.keyCode===13){
            const targetElement = e.target as HTMLElement;
            const clickedDivision = targetElement.classList[1];
            setActiveTab(clickedDivision);
        }
    }

    useEffect(() => {
        if (isDarkMode){
            darkMode.enable();
            document.body.style.backgroundColor = "#0E1341";
        }
        else{
            darkMode.disable();
            document.body.style.backgroundColor = "#6FBDF3";
        }
    },[darkMode])

    return (
        <>
            <Styled>
                <>
                    <div className="page-content">
                        <div className="fixed-header-container">
                            <div className="welcome-user">
                                <div className="user-image">
                                    <img src={userProfileImage} alt="user profile image" height="100" width="100"/>
                                </div>
                                <div className="welcome-text">
                                    Welcome, Kevin
                                </div>
                            </div>
                            <div className="dark-mode-setting">
                                <DarkModeToggle
                                    onChange={setIsDarkMode}
                                    checked={isDarkMode}
                                    size={80}
                                />
                            </div>
                            <div className="nav-options">
                                {navOptions && navOptions.map((navOption) => (
                                    <div className={`nav-option ${navOption.toLowerCase().replace(/ /g,"-")} ` + ((navOption.toLowerCase().replace(/ /g,"-")===activeTab)? "active-tab":"")} onClick={(e) => setActive(e)} onKeyDown={(e) => setActive(e)}>
                                        {navOption}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`dashboard-component ${navOptions[0].toLowerCase().replace(/ /g,"-")} ${(activeTab == navOptions[0].toLowerCase().replace(/ /g,"-"))? "" : "hide-content"}`}>
                            <Dashboard />
                        </div>
                        <div className={`conversion-component ${navOptions[2].toLowerCase().replace(/ /g,"-")} ${(activeTab == navOptions[2].toLowerCase().replace(/ /g,"-"))? "" : "hide-content"}`}>
                            <ConversionComponent />
                        </div>
                    </div>
                </>
            </Styled>
        </>
    );
}