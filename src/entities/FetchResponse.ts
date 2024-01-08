import { User } from "./User";

export interface FetchResponse<T> {
  data: T;
  message: boolean;
}
