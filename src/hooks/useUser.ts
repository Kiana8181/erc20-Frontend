import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { FetchResponse } from "../entities/FetchResponse";
import { User } from "../entities/User";

const apiClient = new ApiClient<FetchResponse<User>>("/api/admin/user");

const useUser = () =>
  useQuery<FetchResponse<User>, Error>({
    queryKey: ["user"],
    queryFn: apiClient.post,
  });

export default useUser;
