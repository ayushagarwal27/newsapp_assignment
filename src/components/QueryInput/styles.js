import styled from "styled-components";

export const Input = styled.input`
  padding: 10px 15px;
  color: #2e290c;
  border-radius: 8px;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  padding: 8px 15px;
  background: #2e290c;
  color: bisque;
  border-radius: 8px;

  &:hover {
    background: #7b7224ff;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 10px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
