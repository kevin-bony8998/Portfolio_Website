import React, { useContext } from 'react';
import { progressProps } from "../../index.types";
import { Styled } from './index.styles';
import { ThemeContext } from '../../../../App';
import { ReactComponent as TaskCompleteImg } from "./taskComplete.svg";
import { ReactComponent as TaskStartingImg } from "./taskStarting.svg";

const Progress_bar = (props: {progress: progressProps}) => {
    const height = props.progress.height;
    const progress = props.progress.progress;
    const bgcolor = props.progress.bgcolor;
    const contextValues = useContext(ThemeContext);
    const isDarkMode = contextValues[0];
    const Parentdiv = {
        height: height,
        width: '90%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 'auto',
        marginTop: 25,
    }
    
    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
    }
    
    const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 900,
        marginTop: 10
    }
        
    return(
        <>
            <Styled>
                <div className={`progress-bar-component ${isDarkMode ? "dark-mode" : "light-mode"}`}>
                    <h3 className="progress-header">
                        Your progress to your next reward:
                    </h3>
                    <div style={Parentdiv}>
                        <div className="child-div" style={Childdiv}>
                            <span className="progress-lister" style={progresstext}>{`${progress}%`}</span>
                        </div>
                    </div>
                    <TaskCompleteImg className="progress-bar-img task-complete-image"/>
                    <TaskStartingImg className="progress-bar-img task-starting-image"/>
                </div>
            </Styled>
        </>
    )
}
  
export default Progress_bar;