import React from "react";
import "./App.scss";
import Button from "theme/Button/Button";

const App = () => {
  return (
    <div className="App">
      <Button type="like" onClick={() => console.log()} />
    </div>
  );
};

export default App;
