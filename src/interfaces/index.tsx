export type Status = "Good" | "Normal" | "Bad";

export interface Data {
  id: number;
  content: String;
  status: Status;
}
