import { useEffect, useState } from "react";
import Header from "./../components/Header";
import AllProducts from "./../components/AllProducts";
import { WrapperContent } from "@/styles/Home/style";

export default function Home() {
  return (
    <div>
      <Header />
      <WrapperContent>
        <AllProducts />
      </WrapperContent>
      <div></div>
    </div>
  );
}
