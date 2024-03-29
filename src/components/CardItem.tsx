import { Data } from "../interfaces";

interface Props {
  data: Data;
  handleDragging: (dragging: boolean) => void;
}

export const CardItem = ({ data, handleDragging }: Props) => {
  return (
    <div className="card-container" draggable>
      <p>{data.content}</p>
    </div>
  );
};
