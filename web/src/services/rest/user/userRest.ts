import RegisterType from "../../../@types/registerType";
import api from "../../api";
import { AuthDataType } from "../../auth";

export const login = async (
  email: string,
  password: string
): Promise<AuthDataType> => {
  const data: AuthDataType = await api.post("/login", { email, password });
  return data;
};

export const register = async (data: RegisterType): Promise<void> => {
  await api.post("/register", data);
};
