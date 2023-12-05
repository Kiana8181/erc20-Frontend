import axios from "axios";
import { axiosInstance } from "../../services/api-client";

const endoint1 = "/api/login";
const endoint2 = "/api/register";
const endoint3 = "/api/user/transfer";
const endoint4 = "/v1/auth/wizard";

async function Login(body: any) {
  const { data } = await axiosInstance.post(endoint1, body);
  localStorage.setItem("tokenKey", data["token"]);
  return data;
}

async function Register(body: any) {
  const { data } = await axiosInstance.post(endoint2, body);
  return data;
}

async function SendCoin(body: any) {
  const { data } = await axiosInstance.post(endoint3, body, {
    headers: { Authorization: `Token: ${localStorage.getItem("tokenKey")}` },
  });
  return data;
}

async function BuyCoin(body: any) {
  const { data } = await axios.post(`http://localhost:8082/mint`, body, {});
  return data;
}

export { Login, Register, SendCoin, BuyCoin };
