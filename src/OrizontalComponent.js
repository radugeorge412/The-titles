import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class OrizontalComponent extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.name = "Default";
  }

  static get styles() {
    return css`
      .container {
        cursor: pointer;
        display: flex;
        width: auto;
        padding: 0 1rem;
        height: 5.5rem;
        white-space: nowrap;
        align-items: center;
        justify-content: center;
      }
      span {
        font-family: "Roboto";
        font-size: 1.8rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.6);
      }
    `;
  }

  render() {
    return html`
      <div
        class="container"
        @click="${(e) => {
          this.shadowRoot.querySelector(".container").style.borderBottom =
            "2px solid #3b27f9";
        }}"
      >
        <span>${this.name}</span>
      </div>
    `;
  }
}
