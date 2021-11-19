import { Styled } from "./index.styles";
import { TaskListComponent } from "./partials/TaskListComponent";
import { TaskAdditionComponent } from "./partials/TaskAdditionComponent";

export const ConversionComponent = () => {
    return (
        <>
            <Styled>
                <div className="conversion-component-container">
                    <div className="add-tasks">
                        <TaskAdditionComponent />
                    </div>
                    <div className="task-display">
                        <TaskListComponent />
                    </div>
                </div>
            </Styled>
        </>
    );
}