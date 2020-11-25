import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { useAppState } from "../AppStateContext";
import { ColumnContainer, ColumnTitle } from "../styles";
import { DragItem } from "../types/DragItem";
import { useItemDrag } from "../utils/useItemDrag";
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
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      dispatch({
        type: "MOVE_LIST",
        payload: { dragIndex, hoverIndex },
      });
      item.index = hoverIndex;
    },
  });
  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });

  drag(drop(ref));

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {lists[index]?.tasks?.map((task) => (
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
