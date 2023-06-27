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
      background-color: #939393;
      border-radius: 10px;
      height: 100%;
      min-height: 150px;
      max-width: 800px;
    }

    .avatar {
      display: flex;
      justify-content: end;
    }

    .avatar-img {
      border-radius: 0 10px 0 50px;
      position: absolute;
    }

    .marvel-description {
      padding: 10px;
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

    .marvel-search-header {
      align-items: center;
      background-color: #21294d;
      background-image: URL("/assets/img/america_logo.png");
      background-repeat: no-repeat;
      background-position: left;
      border-radius: 0 10px 0 0;
      display: flex;
      height: 150px;
      width: 100%;
    }

    .search-button {
      height: 35px;
      margin-left: 10px;
      width: 100px;
    }

    .search-input {
      height: 35px;
      padding-left: 10px;
      margin: 5px;
      width: 200px;
    }

    .wrapper {
      display: grid;
      grid-auto-rows: 200px;
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media screen and (max-width: 820px) {
    .wrapper {
      display: grid;
      grid-auto-rows: 200px;
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media screen and (max-width: 660px) {
    hr {
      margin: 10px;
    }

    section {
      background-color: #939393;
      border-radius: 10px;
      height: 100%;
      min-height: 150px;
      max-width: 800px;
      display: grid;
    }

    .avatar {
      order: 2;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
    }

    .marvel-description {
      padding: 10px;
      order: 4;
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
    }

    .marvel-list-image {
      margin-bottom: 10px;
    }

    .marvel-name {
      font-family: Copperplate, Papyrus, fantasy;
      font-size: 35px;
      padding: 10px 0 0 10px;
      order: 3;
    }

    .marvel-search-header {
      align-items: center;
      background-color: #21294d;
      background-image: URL("/assets/img/america_logo.png");
      background-repeat: no-repeat;
      background-position: left;
      border-radius: 5px 5px 0 0;
      display: flex;
      height: 150px;
      width: 100%;
      order: 1;
    }

    .search-button {
      height: 35px;
      margin-left: 10px;
      width: 100px;
    }

    .search-input {
      height: 35px;
      padding-left: 10px;
      width: 200px;
    }

    .wrapper {
      display: grid;
      grid-auto-rows: 200px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
