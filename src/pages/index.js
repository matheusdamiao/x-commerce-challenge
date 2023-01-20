import { useEffect, useState } from "react";
import Header from "./../components/Header";
import AllProducts from "./../components/AllProducts";
import { WrapperContent } from "@/styles/Home/style";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Toaster toastOptions={{ position: "bottom-center" }} />
      <Header />
      <WrapperContent>
        <AllProducts />
      </WrapperContent>
      <div></div>
    </div>
  );
}
