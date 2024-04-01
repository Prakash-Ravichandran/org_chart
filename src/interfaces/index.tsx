export type Status = "Thomas Frank" | "Mikel Arteta" | "Mark Robins";

// interface CustomImage {
//   data: string;
//   width: number;
//   height: number;
// }
export interface Data {
  id: number;
  name: String;
  designation: String;
  image: string;
  status: Status;
}
