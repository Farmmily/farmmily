// import { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "../config/firebase";
// import {
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import axios from "../services/axiosInstance";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // MongoDB user (includes role)
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchMongoUser = async (firebaseUser) => {
//     const idToken = await firebaseUser.getIdToken();
//     setToken(idToken);
//     const res = await axios.post("/users/login", null, {
//       headers: { Authorization: `Bearer ${idToken}` },
//     });
//     setUser(res.data.user); // <== This now contains role, etc.
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (firebaseUser) {
//         try {
//           await fetchMongoUser(firebaseUser);
//         } catch (err) {
//           console.error("Error syncing user with backend:", err);
//         }
//       } else {
//         setUser(null);
//         setToken(null);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const login = async (email, password) => {
//     const cred = await signInWithEmailAndPassword(auth, email, password);
//     await fetchMongoUser(cred.user);
//   };

//   const signup = async (email, password) => {
//     const cred = await createUserWithEmailAndPassword(auth, email, password);
//     await fetchMongoUser(cred.user);
//   };

//   const logout = async () => {
//     await signOut(auth);
//     setUser(null);
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, token, signup, login, logout, loading }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
