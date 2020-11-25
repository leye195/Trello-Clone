import React from "react";
import "./App.css";
import { useAppState } from "./AppStateContext";
import AddNewItem from "./container/AddNewItem";
import AppContainer from "./container/AppContainer";
import Column from "./container/Column";

function App() {
  const {
    state: { lists },
    dispatch,
  } = useAppState();
  return (
    <AppContainer>
      {lists.map((list, index) => (
        <Column key={list?.id} text={list?.text} index={index} id={list?.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another Item"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
}

export default App;
