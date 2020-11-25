import React from "react";
import { useAppState } from "../AppStateContext";
import { ColumnContainer, ColumnTitle } from "../styles";
import AddNewItem from "./AddNewItem";
import Card from "./Card";

interface Props {
  text: string;
  index: number;
  id: string;
}

const Column = ({ text, index, id }: Props) => {
  const {
    state: { lists },
    dispatch,
  } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {lists[index].tasks?.map((task) => (
        <Card key={task.id} text={task.text} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({
            type: "ADD_TASK",
            payload: {
              text,
              listId: id,
            },
          })
        }
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
