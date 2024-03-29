import { Data, Status } from "../interfaces";
import { CardItem } from "./CardItem";

interface Props {
  items: Data[];
  status: Status;
}

export const ContainerCards = ({ items = [], status }: Props) => {
  return (
    <div className="layout-cards">
      <p>{status}hero</p>
      {items.map((item) => (
        <CardItem data={item} key={item.id} />
      ))}
    </div>
  );
};
