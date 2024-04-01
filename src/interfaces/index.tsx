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
