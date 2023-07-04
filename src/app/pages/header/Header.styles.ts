import styled from "styled-components";

export const Container = styled.div`
  .logo-img {
    margin: 5px;
  }

  .container-box {
    width: 1280px;
    display: flex;
    background-color: black;
    align-items: center;
    justify-content: space-between;
  }

  .search-button {
    background-color: #263038;
    border: none;
    border-bottom: 1px solid #fff;
    height: 35px;
    margin-top: 5px;
    width: 100px;
    margin-right: 10px;
  }

  .search-input {
    background-color: #263038;
    border: none;
    border-bottom: 1px solid #fff;
    height: 35px;
    padding-left: 10px;
    margin-top: 5px;
    width: 200px;
  }

  .search-input:focus-visible {
    outline: none;
  }
`;
