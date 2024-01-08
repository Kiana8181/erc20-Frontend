import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";
import { History } from "../entities/History";

const apiClient = new ApiClient<FetchResponse<History[]>>(
  "/api/user/gettransactions"
);

const useHistory = () =>
  useQuery({
    queryKey: ["history"],
    queryFn: apiClient.getAll,
  });

export default useHistory;
