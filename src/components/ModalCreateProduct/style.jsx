import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(54, 56, 61, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

export const WrapperContent = styled.form`
  width: 600px;
  height: 500px;
  background-color: white;
  z-index: 999;
  border-radius: 9px;
  color: #242697;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  border-radius: 9px;
  gap: 20px;
  margin: 0px 20px;
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 0;
  color: black;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreateBtn = styled.button`
  background-color: #052541;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 9px;
`;
