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

  @media screen and (min-width: 661px) {
    hr {
      margin: 10px;
    }

    section {
      background-image: URL("/assets/img/background.jpg");
      background-size: 100%;
      border-radius: 10px 0 0 10px;
      height: 720px;
      min-height: 150px;
      width: 1280px;
    }

    .avatar {
    }

    .avatar-img {
      border-radius: 9px 0 400px 0;
      position: absolute;
    }

    .marvel-datas-grid {
      display: grid;
      grid-auto-rows: 30px;
      grid-template-columns: repeat(2, 1fr);
    }

    .marvel-datas {
      justify-self: center;
    }

    .marvel-datas-results {
      padding: 10px 0 0 0;
    }

    .marvel-description {
      padding: 10px;
      float: right;
      width: 40%;
    }

    .marvel-header {
      margin: 15px 0 15px 0;
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

    table th,
    table td {
      text-align: center;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
    }

    .marvel-search-header {
      border-radius: 0 10px 0 0;
      display: flex;
      justify-content: flex-end;
      height: 150px;
      width: 100%;
    }

    .pagination-button {
      height: 35px;
      margin-left: 10px;
      width: 100px;
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

    .search-button:hover {
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.12);
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

    .wrapper {
      display: grid;
      grid-auto-rows: 200px;
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
