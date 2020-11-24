import React from "react";
import { CardContainer } from "../styles";

interface Props {
  text: string;
}

const Card = ({ text }: Props) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;
