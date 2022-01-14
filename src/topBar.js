import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

import { SearchBar } from "./SearchBar.js";

export class TopBar extends LitElement {
  static get styles() {
    return css`
      .navContainer {
        display: flex;

        height: 6.4rem;
        width: 100%;
        margin: auto;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 10px -8px black;
        background: #ffffff;
      }
      h2 {
        margin-left: 3rem;
        font-size: 2rem;
        font-family: "Roboto", sans-serif;
        line-height: 2.3rem;
      }

      .titleContainer {
        display: flex;
        align-items: center;
        padding: 2.4rem;
      }
      .itemFlex {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
      }
      .dotBtn {
        background: none;
        border: none;
        margin-right: 2rem;
      }

      .searchContainer {
        text-align: center;
        width: 54rem;
      }
      .svgContainer {
        text-align: right;
      }
      search-bar {
        padding: 2rem;
      }

      .burger {
        display: none;
        text-align: center;
      }
      .brg .line1 {
        transform: rotate(-45deg) translate(-0.5rem, 0.5rem);
      }
      .brg .line2 {
        opacity: 0;
      }
      .brg .line3 {
        transform: rotate(45deg) translate(-0.5rem, -0.5rem);
      }
      .burger div {
        width: 2.5rem;
        height: 0.2rem;
        margin: 0.5rem;
        background-color: black;
      }

      .svgContainer img {
        display: none;
        margin-right: 2rem;
      }

      @media screen and (max-width: 1024px) {
        .titleContainer img {
          display: none;
        }
        .titleContainer {
          display: block;
          text-align: center;
        }
        h2 {
          margin: auto;
        }

        .burger {
          display: inline;
          cursor: pointer;
          margin-left: 1.5rem;
        }

        .searchContainer {
          display: none;
        }

        .svgContainer img {
          display: inline;
          margin-right: 2rem;
        }
        .dotBtn {
          display: none;
        }
      }
      .menu-active {
        transform: translateX(0%);
      }
      .loopMobile {
        height: 3rem;
        width: 5rem;
        background-color: red;
      }
      .searchContainer.deschis {
        display: inline;
        position: absolute;
        width: 92%;
        left: 0.5rem;
      }
      a {
        text-decoration: none;
        color: black;
      }
    `;
  }

  constructor() {
    super();
    this.open = false;
  }

  render() {
    return html`<div class="navContainer">
      <div
        @click="${(e) => {
          // this.shadowRoot
          //   .querySelector("menu-left")
          //   .classList.toggle("menu-active");
          e.target.classList.toggle("burger-active");
          window.dispatchEvent(
            new CustomEvent("burger-clicked", {
              detail: [...e.target.classList].includes("burger-active"),
            })
          );
        }}"
        class="burger itemFlex"
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="titleContainer itemFlex">
        <img
          src="/assets/arrow.png"
          alt="sageata"
          width="15rem"
          height="15rem"
        />
        <a href="/"><h2 class="title">TITLURILE.RO</h2></a>
      </div>
      <div class="itemFlex searchContainer">
        <search-bar class="searchBar"></search-bar>
      </div>
      <div class="itemFlex svgContainer">
        <button class="dotBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            />
          </svg>
        </button>
        <img
          @click="${(e) => {
            console.log(e.target);
            e.target.classList.toggle("inputMedia");
            this.shadowRoot.querySelector(".lupaMedia").src =
              this._toggleOpen();
            this.shadowRoot
              .querySelector(".searchContainer")
              .classList.toggle("deschis");
          }}"
          class="lupaMedia"
          src="/assets/searchIcon.png"
          alt="search"
          width="18rem"
        />
      </div>
    </div> `;
  }
  /* <menu-left
        @click="${(e) => e.target.classList.remove("menu-active")}"
      ></menu-left> */
  _toggleOpen() {
    this.open = !this.open;
    console.log(this.open);
    if (this.open === true) return "/assets/close.png";
    else {
      return "/assets/searchIcon.png";
    }
  }
}
