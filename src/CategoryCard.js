import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

// import { unsafeHTML } from "lit/directives/unsafe-html.js";
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
export class CategoryCard extends LitElement {
  static get properties() {
    return {
      icon: {
        type: String,
      },
      name: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        cursor: pointer;
        display: inline-block;
      }
      .cardContainer {
        display: flex;
        align-items: center;
        height: 4.8rem;
        width: 28rem;
      }

      p {
        font-family: "Roboto", sans-serif;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }

      svg {
        fill: grey;
        margin-left: 1.4rem;
        margin-right: 1.2rem;
      }
      .card-active {
        background-color: rgba(193, 66, 66, 0.08);
      }
    `;
  }

  render() {
    return html`
      <div
        class="cardContainer"
        @mouseenter="${(e) => {
          this.shadowRoot.querySelector("svg").style.fill = "#3B27F9";
          this.shadowRoot.querySelector("div").style.backgroundColor =
            "rgba(193, 66, 66,0.08)";
          this.shadowRoot.querySelector("div").style.color = "#3B27F9";
        }}"
        @mouseleave="${(e) => {
          this.shadowRoot.querySelector("svg").style.fill = "grey";
          this.shadowRoot.querySelector("div").style.backgroundColor = "white";
          this.shadowRoot.querySelector("div").style.color = "#333333";
        }}"
      >
        <slot></slot>
        ${iconita.map(
          (item) => html`<svg
            class="icon"
            width="25"
            height="23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M12.727 19.763l-1.45-1.21c-5.15-4.281-8.55-7.104-8.55-10.57 0-2.823 2.42-5.041 5.5-5.041 1.74 0 3.41.742 4.5 1.916 1.09-1.174 2.76-1.916 4.5-1.916 3.08 0 5.5 2.218 5.5 5.042 0 3.465-3.4 6.288-8.55 10.578l-1.45 1.2z"
            ></path>
          </svg>`
        )}
        <p>${this.name}</p>
      </div>
    `;
  }
}
