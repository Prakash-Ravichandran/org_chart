export type Managers = "Thomas Frank" | "Mikel Arteta" | "Mark Robins";

export interface Data {
  id: number;
  name: String;
  designation: String;
  image: string;
  reportsTo: Managers;
}

export interface DropdownProps {
  options: Array<{
    id: number;
    name: String;
    designation: String;
    reportsTo: String;
  }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface EmployeeCardProps {
  data: Data;
  handleDragging: (dragging: boolean) => void;
}

export interface ManagerCardProps {
  items: Data[];
  reportsTo: Managers;
  isDragging: boolean;
  handleUpdateList: (id: number, reportsTo: Managers) => void;
  handleDragging: (dragging: boolean) => void;
}

export interface searchProps {
  Value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
