import { AppContext } from "@/context/context";
import { createProduct, getAllProducts } from "@/Utils/api";
import useSWR from "swr";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Wrapper,
  Title,
  WrapperContent,
  InputWrapper,
  CreateBtn,
} from "./style";
import { toast } from "react-hot-toast";

const index = ({ setIsModalOpen }) => {
  const [productValue, setProductValue] = useState({
    name: "",
    code: "",
    sales: "",
    price: "",
    stock: "",
  });
  const context = useContext(AppContext);
  // Local state and its update function
  const { allProducts, setAllproducts } = context;
  // Server state to be mutated after post request
  const { data } = useSWR("/api/products", getAllProducts);

  const modal = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProduct = await createProduct(productValue);
      if (newProduct.product) {
        setIsModalOpen(false);
        toast.success("Produto criado!");
        console.log(allProducts);
        await setAllproducts((prev) => [...prev, { ...newProduct.product }]);
      }
    } catch (e) {
      setIsModalOpen(false);
      toast.error("Ops, ocorreu algum erro. Tente novamente");
    }
  };

  useEffect(() => {
    setAllproducts([data]);
  }, []);

  const updateInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductValue({
      ...productValue,
      [name]: value,
    });
  };

  return (
    <Wrapper
      ref={modal}
      onClick={(e) => e.target == modal.current && setIsModalOpen(false)}
    >
      <WrapperContent onSubmit={handleSubmit}>
        <Title>Create new Product</Title>
        <InputWrapper>
          <label>Name: </label>

          <input
            required
            type="text"
            name="name"
            value={productValue.name}
            onChange={updateInput}
          />
          <span></span>
        </InputWrapper>

        <InputWrapper>
          <label>Code: </label>
          <input
            required
            type="text"
            name="code"
            value={productValue.code}
            onChange={updateInput}
          />
          <span></span>
        </InputWrapper>

        <InputWrapper>
          <label>Sales: </label>
          <input
            required
            type="text"
            name="sales"
            value={productValue.sales}
            onChange={updateInput}
          />
          <span></span>
        </InputWrapper>

        <InputWrapper>
          <label>Price: </label>
          <input
            required
            type="text"
            name="price"
            value={productValue.price}
            onChange={updateInput}
          />
          <span></span>
        </InputWrapper>

        <InputWrapper>
          <label>Stock: </label>
          <input
            required
            type="text"
            name="stock"
            value={productValue.stock}
            onChange={updateInput}
          />
          <span></span>
        </InputWrapper>

        <CreateBtn type="submit">CREATE PRODUCT</CreateBtn>
      </WrapperContent>
    </Wrapper>
  );
};

export default index;
