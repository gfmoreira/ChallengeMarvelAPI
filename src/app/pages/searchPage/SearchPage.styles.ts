import styled from "styled-components";

export const Container = styled.div`
  .avatar {
    border-radius: 0 10px 0 50px;
    float: right;
  }

  .search-button {
    width: 100px;
    height: 35px;
    margin-left: 10px;
  }

  .search-input {
    width: 200px;
    height: 35px;
    padding-left: 10px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 200px;
  }

  .marvel-header {
    margin: 15px 0 15px 0;
  }

  .marvel-logo {
  }

  .marvel-search-header {
    background-color: #21294d;
    height: 150px;
    border-radius: 0 10px 0 0;
    display: flex;
  }

  .marvel-list {
    display: flex;
    flex-flow: column;
    width: 100px;
    height: 150px;
    margin: 10px;
    border-radius: 10px;
  }

  .marvel-list-button {
    border-radius: 5px;
  }

  .marvel-list-image {
    margin-bottom: 10px;
  }

  .marvel-description {
    padding: 10px;
  }

  .marvel-name {
    padding: 10px 0 0 10px;
    font-size: 35px;
    font-family: Copperplate, Papyrus, fantasy;
  }

  hr {
    margin: 10px;
  }

  section {
    width: 800px;
    height: 100%;
    min-height: 150px;
    background-color: #939393;
    border-radius: 10px;
  }
`;
