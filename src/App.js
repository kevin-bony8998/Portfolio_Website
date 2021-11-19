import { useState, createContext } from "react";
import { Styled } from './App.styles.tsx';
import StaticSideComponent from "./staticSideComponent/index";

export const ThemeContext = createContext();

function App() {
  const navOptions=["Dashboard", "Log my progress", "Conversion chart"];
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <Styled>
      <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
        <div className={`App ${isDarkMode? "dark-mode" : "light-mode"}`}>
          <div className="title-component">
            <StaticSideComponent titleMenuOptions={navOptions}/>
          </div>
        </div>
      </ThemeContext.Provider>
    </Styled>
  );
}

export default App;
