import React from "react";
import ApiClient from "../services/api-client";
import { Data } from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Data>("/api/admin/user");

const useUser = () =>
  useQuery<Data, Error>({
    queryKey: ["user"],
    queryFn: apiClient.post,
  });

export default useUser;
