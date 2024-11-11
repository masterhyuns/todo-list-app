"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { getCookie } from "cookies-next";
import { verifyToken } from "@/helpers/utils/token";

const SECRET_KEY = "your-secret-key";

type IUser = {
  email: string;
};

interface AuthContextType {
  user: IUser | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  // 비동기 초기화 함수
  const init = async () => {
    try {
      const token = getCookie("token") as string | undefined;
      if (token) {
        const decodedUser = (await verifyToken(token, SECRET_KEY)) as IUser;
        setUser(decodedUser);
      }
    } catch (error) {
      console.error("토큰 검증 실패:", error);
      setUser(null); // 검증 실패 시 유저를 null로 설정
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
