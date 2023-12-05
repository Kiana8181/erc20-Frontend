import React from "react";
import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Balance {
  value: string;
}

const apiClient = new ApiClient<Balance>("/api/user/balance");

const useBalance = () =>
  useQuery({
    queryKey: ["balance"],
    queryFn: apiClient.getAll,
  });

export default useBalance;
