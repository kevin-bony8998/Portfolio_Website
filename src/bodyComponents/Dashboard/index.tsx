import Progress_bar from "./partials/progressBar";
import TaskLister from "./partials/taskLister";
import { Styled } from "./index.styles";

export default function Dashboard(){
    /*
    Included features will include:
        1. Recent activity from organisation
        2. User's progress graph and statistics for the week (hours worked, etc.)
    */
   const props = {bgcolor:"green", progress:"70", height:"5px"}
   return (
        <>
            <Styled>
                <div className="dashboard-component-container">
                    <div className="first-component">
                        <Progress_bar progress={props}/>
                    </div>
                    <div className="second-component">
                        <TaskLister />
                    </div>
                </div>
            </Styled>
        </>
   );
}