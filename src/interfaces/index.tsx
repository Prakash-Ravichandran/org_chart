export type Status = "Thomas Frank" | "Mikel Arteta" | "Mark Robins";

export interface Data {
  id: number;
  name: String;
  designation: String;
  image: string;
  status: Status;
}

export interface DropdownProps {
  options: Array<{
    id: number;
    name: String;
    designation: String;
    status: String;
  }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface EmployeeCardProps {
  data: Data;
  handleDragging: (dragging: boolean) => void;
}

export interface ManagerCardProps {
  items: Data[];
  status: Status;
  isDragging: boolean;
  handleUpdateList: (id: number, status: Status) => void;
  handleDragging: (dragging: boolean) => void;
}

export interface searchProps {
  Value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
