import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class SocialButton extends LitElement {
  static get properties() {
    return {
      path: {
        type: String,
      },
      link: {
        type: String,
      },
    };
  }
  static get styles() {
    return css`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 6rem;
        height: 2.5rem;
        border-radius: 0.5rem;
        padding: 1rem;
        border: 1px solid #e0e0e0;
      }
      .frame {
        width: 2.2rem;
        height: 2.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }
  constructor() {
    super();
    this.path = "";
    this.link = "#";
  }

  render() {
    return html`
      <div
        class="container"
        @click="${() => window.open(`${this.link}`, `_blank`)}"
      >
        <div class="frame">
          <img src="${this.path}" alt="social" />
        </div>
      </div>
    `;
  }
}
