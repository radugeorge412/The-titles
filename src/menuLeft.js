import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

const vector = ["Sport", "Tech", "Politica", "Covid-19", "Sanatate", "Vreme"];

const iconita = [
  `<svg
          class="icon"
          width="25"
          height="23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.727 19.763l-1.45-1.21c-5.15-4.281-8.55-7.104-8.55-10.57 0-2.823 2.42-5.041 5.5-5.041 1.74 0 3.41.742 4.5 1.916 1.09-1.174 2.76-1.916 4.5-1.916 3.08 0 5.5 2.218 5.5 5.042 0 3.465-3.4 6.288-8.55 10.578l-1.45 1.2z"
          ></path>
        </svg>`,
];

export class MenuLeft extends LitElement {
  static get properties() {
    return {
      v: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.v = vector;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      .bigContainer {
        display: inline-block;
        max-width: 28rem;
      }
      .description {
        height: 5rem;
        display: flex;
      }
      p {
        margin-top: 2rem;
        margin-bottom: 0;
        margin-left: 1.7rem;
        font-size: 2rem;
        font-family: Roboto;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.87);
      }
      .privacyContainer {
        padding: 1.2rem;
        width: auto;
        height: 19rem;
      }
      .list {
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 40rem;
      }

      @media screen and (max-width: 1024px) {
        .bigContainer {
          display: inline-block;
          background-color: white;
          position: absolute;
          top: 6.5rem;
          transform: translateX(-110%);
          transition: transform 0.5s ease-in;
          z-index: 2;
        }
        .menu-active {
          transform: translateX(0%);
        }
      }
    `;
  }

  returnChild() {
    return html`<svg
      class="icon"
      width="25"
      height="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M12.727 19.763l-1.45-1.21c-5.15-4.281-8.55-7.104-8.55-10.57 0-2.823 2.42-5.041 5.5-5.041 1.74 0 3.41.742 4.5 1.916 1.09-1.174 2.76-1.916 4.5-1.916 3.08 0 5.5 2.218 5.5 5.042 0 3.465-3.4 6.288-8.55 10.578l-1.45 1.2z"
      ></path>
    </svg>`;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("burger-clicked", (e) => {
      this.shadowRoot
        .querySelector(".bigContainer")
        .classList.toggle("menu-active");
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("burger-clicked", (e) => {
      this.shadowRoot
        .querySelector(".bigContainer")
        .classList.toggle("menu-active");
    });
  }

  render() {
    console.log(this.v);
    return html`<div class="bigContainer">
      <div class="description">
        <p>Categories</p>
      </div>
      <div class="list">
        ${this.v.map(
          (index) => html`<categ-card name="${index}"></categ-card>`
        )}
      </div>
      <div class="privacyContainer">
        <privacy-div></privacy-div>
      </div>
    </div>`;
  }
}
