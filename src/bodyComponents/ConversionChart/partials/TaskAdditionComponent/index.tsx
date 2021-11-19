import React from "react";
import { useContext } from "react";
import { Styled } from "./index.styles";
import { ThemeContext } from "../../../../App";
import Autosuggest from 'react-autosuggest';

const dataContent = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Elm1',
    year: 2012
  },
  {
    name: 'Elm3 street',
    year: 2012
  },
  {
    name: 'Elm4 street',
    year: 2012
  },
  {
    name: 'Elm5 street',
    year: 2012
  },
  {
    name: 'Elm6 street',
    year: 2012
  },
];

const getSuggestions = (value:string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : dataContent.filter(data =>
    data.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};
const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = (suggestion) => (
  <div>
    {suggestion.name}
  </div>
);

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
class Example extends React.Component <any,any> {
  constructor() {
    super({}, {});

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Enter the name of the task',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export const TaskAdditionComponent = () => {
    const contextValues = useContext(ThemeContext);
    const isDarkMode = contextValues[0];
    function hideInfoBox(){
      const getCorrectInfoText = document.getElementsByClassName("get-it-right-info-box")[0] as HTMLElement;
        getCorrectInfoText.style.display = "none";
    }
    function getInputValues(){
      const nameField = (document.getElementsByClassName("react-autosuggest__input")[0] as HTMLInputElement)
      const pointsField = (document.getElementsByClassName("points-blank")[0] as HTMLInputElement)
      const taskName = nameField.value;
      const taskPoints = pointsField.value;
      if (taskName === "" || taskPoints === ""){
        const getCorrectInfoText = document.getElementsByClassName("get-it-right-info-box")[0] as HTMLElement;
        getCorrectInfoText.style.display = "block";
      }
      else
      {
        nameField.value = "";
        pointsField.value = "";
      }
      console.log("taskName",taskName);
    }
    return (
        <>
            <Styled>
                <div className={`task-addition-component ${isDarkMode ? "dark-mode" : "light-mode"}`}>
                    <h3 className="task-addition-header">
                        Add a new task to your list: 
                    </h3>
                    <div className="instruction-note">
                      Kindly note that if the task name appears in the auto-suggest box, it means that the task has already been added. You will be able to use the task directly in the "Log my Progress" section. If you wish to update the points given to a task, kindly note that this functionality is not currently supported.
                    </div>
                    <div className="task-details-enter-area">
                        <div className="new-task-field task-name-details">
                            <div className="name-prompt">
                                Task Name:
                            </div>
                            <div className="name-blank" onChange={() => hideInfoBox()}>
                              <Example />
                            </div>
                        </div>
                        <div className="new-task-field task-points-details"  onChange={() => hideInfoBox()}>
                            <div className="points-prompt">
                                Task Points:
                            </div>
                            <input className="points-blank"
                              type="number" 
                              placeholder="Enter the points for the task" 
                              min="1"/>
                        </div>
                    </div>
                    <div className="get-it-right-info-box">
                      <div className="arrow-section"/>
                      <div className="text-section">
                        Please enter a valid input (above fields should not be empty)
                      </div>
                    </div>
                    <div className="add-task-button" onClick={() => getInputValues()}>
                      <button className="task-addition-button">Add Task</button>
                    </div>
                </div>
            </Styled>
        </>
    );
}