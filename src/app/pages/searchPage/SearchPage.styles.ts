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
    margin-top: 15px;
  }

  @media screen and (min-width: 661px) {
    @keyframes display {
      0% {
        transform: translateX(200px);
        opacity: 0;
      }
      10% {
        transform: translateX(0);
        opacity: 1;
      }
      20% {
        transform: translateX(0);
        opacity: 1;
      }
      30% {
        transform: translateX(-200px);
        opacity: 0;
      }
      100% {
        transform: translateX(-200px);
        opacity: 0;
      }
    }

    .pic-ctn {
      position: relative;
    }

    .pic-ctn > div {
      position: absolute;
      top: 0;
      left: calc(50% - 100px);
      opacity: 0;
      animation: display 10s infinite;
    }

    div:nth-child(2) {
      animation-delay: 2s;
    }
    div:nth-child(3) {
      animation-delay: 4s;
    }
    div:nth-child(4) {
      animation-delay: 6s;
    }
    div:nth-child(5) {
      animation-delay: 8s;
    }
    div:nth-child(6) {
      animation-delay: 10s;
    }
    div:nth-child(7) {
      animation-delay: 12s;
    }
    div:nth-child(8) {
      animation-delay: 14s;
    }
    div:nth-child(9) {
      animation-delay: 16s;
    }
    div:nth-child(610) {
      animation-delay: 18s;
    }

    hr {
      margin: 10px;
    }

    section {
      border-top: 2px solid #2e2e2e;
      background-color: #000;
      height: 720px;
      min-height: 150px;
      width: 640px;
    }

    .background-image-true {
      background-image: URL("/assets/img/background-left.jpg");
    }

    .avatar {
    }

    .avatar-img {
      margin: 10px;
      border: 2px solid #fff;
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
      grid-column-end: span 2;
    }

    .marvel-header {
      margin: 15px 0 15px 0;
    }

    .marvel-information {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 330px;
    }

    .marvel-list {
      border-radius: 10px;
      display: flex;
      flex-flow: column;
      height: 150px;
      margin: 10px;
      width: 100px;
    }

    .marvel-comic-list {
      border-radius: 5px;
      display: flex;
      flex-flow: column;
      margin: 5px;
    }

    .marvel-comic-results {
      display: grid;
      grid-template-columns: repeat(4, 4fr);
    }

    .marvel-list-button {
      border-radius: 5px;
      margin: 2px;
    }

    .marvel-list-image {
      margin-bottom: 10px;
    }

    .marvel-comic-list-image {
    }

    .marvel-name {
      font-family: Copperplate, Papyrus, fantasy;
      font-size: 35px;
      padding: 10px 0 0 10px;
      text-align: center;
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
