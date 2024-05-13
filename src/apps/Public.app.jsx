import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Public/Header";
import { Home, Posts, Login, Register } from "../pages/Public";

export const Public = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
    </>
  )
}
