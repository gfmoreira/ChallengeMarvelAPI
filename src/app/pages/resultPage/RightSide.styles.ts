import styled from "styled-components";

export const Container = styled.div`
  .marvel-list-pre-button {
    text-align: center;
  }

  .marvel-welcome {
    padding: 0 0 10px 0;
    text-align: center;
  }

  .marvel-welcome-title {
    font-family: Copperplate, Papyrus, fantasy;
    font-size: 25px;
    padding: 0 10px 10px 0;
    text-align: center;
  }

  hr {
    margin: 10px;
  }

  section {
    border-top: 2px solid #2e2e2e;
    background-image: URL("/assets/img/background-right.jpg");
    background-size: 100%;
    min-height: 100%;
    width: 640px;
  }

  .marvel-datas-results {
    padding: 10px 0 0 0;
  }

  .marvel-description {
    padding: 10px;
  }

  .marvel-list {
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    height: 150px;
    margin: 10px;
    width: 100px;
  }

  .marvel-list-button {
    border-radius: 5px;
    margin: 2px;
  }

  .marvel-list-image {
    margin-bottom: 10px;
  }

  .marvel-name {
    font-family: Copperplate, Papyrus, fantasy;
    font-size: 35px;
    padding: 10px 0 0 10px;
  }

  .marvel-result-text {
    padding-bottom: 10px;
  }

  .pagination-button {
    height: 35px;
    margin-left: 10px;
    width: 100px;
  }

  .wrapper {
    display: grid;
    grid-auto-rows: 200px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
