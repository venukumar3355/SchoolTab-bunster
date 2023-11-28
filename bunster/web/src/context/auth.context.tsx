// import { createContext, useState } from "react";

// export type UserDetails = {
//   id: number;
//   name: string;
//   token: string;
//   email: string;
// };

// export type AuthContextType = {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   login: (user: any) => void;
// };

// export const AuthContext = createContext<AuthContextType | null>(null);

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const AuthProvider = ({ children }: any) => {
//   const [state, setState] = useState<UserDetails | null>(null);

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const login = (data: any) => {
//     localStorage.setItem("name", data.name);
//     localStorage.setItem("id", data.id);
//     localStorage.setItem("email", data.email);
//     localStorage.setItem("token", data.token);
//     setState(data);
//   };
//   return (
//     <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
//   );
// };
