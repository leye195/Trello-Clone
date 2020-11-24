import React, { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles";
import useFocus from "../utils/useFocus";

interface Props {
  onAdd(text: string): void;
}

const NewItemForm = ({ onAdd }: Props) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
