import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Balance } from "../entities/Balance";

const apiClient = new ApiClient<Balance>("/api/user/balance");

const useBalance = () =>
  useQuery({
    queryKey: ["balance"],
    queryFn: apiClient.getAll,
  });

export default useBalance;
