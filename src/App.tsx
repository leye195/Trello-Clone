import React from "react";
import "./App.css";
import AddNewItem from "./container/AddNewItem";
import AppContainer from "./container/AppContainer";
import Card from "./container/Card";
import Column from "./container/Column";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Build Pack"></Card>
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript"></Card>
      </Column>
      <Column text="Done">
        <Card text="Learning JS"></Card>
      </Column>
      <AddNewItem toggleButtonText="+ Add another Item" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
