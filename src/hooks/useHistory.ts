import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

export interface Data {
  data: History[];
  message: boolean;
}

interface History {
  from: string;
  to: string;
  date: string;
  value: string;
  type: "0" | "1" | "2";
}

const apiClient = new ApiClient<Data>("/api/user/gettransactions");

const useHistory = () =>
  useQuery({
    queryKey: ["history"],
    queryFn: apiClient.getAll,
  });

export default useHistory;
