import { Status } from "../interfaces";

interface Props {
  status: Status;
}

export const ContainerCards = ({ status }: Props) => {
  return (
    <div className="layout-cards">
      <p>{status}</p>
      {/* Cards */}
    </div>
  );
};
