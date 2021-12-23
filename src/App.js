import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Card } from "primereact/card";

function App() {
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  if (status === "loading") {
    return <div>Loading styles...</div>;
  }

  const toggleDarkMode = () => {
    setIsDarkMode((previous) => {
      switcher({ theme: previous ? themes.light : themes.dark });
      return !previous;
    });
  };
  return (
    <Card>
      aws-learning-app is Working !<h2>Current theme: {currentTheme}</h2>
      <button onClick={toggleDarkMode}>toggle theme</button>
    </Card>
  );
}

export default App;
