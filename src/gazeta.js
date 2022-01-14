import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class GazetaComponent extends LitElement {
  static get properties() {
    return {
      src: { type: String },
      timeAgo: { type: String, reflect: true },
    };
  }

  static get styles() {
    return css`
      host: {
        width: 5.5rem;
        height: 6.5rem;
      }
      .gazetaContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 6px 9px;
        background: #f9f9f9;
        border: 1px solid #dadce0;
        border-radius: 1.5rem;

        width: 5rem;
        height: 6rem;
      }
      img {
        width: 70%;
        margin: 0.5rem 0rem;
        margin-top: 1.2rem;
      }
      span {
        font-size: 1.1rem;
        font-family: "Roboto";
        color: #828282;
        text-align: center;
        margin: 0.5rem 0rem;
      }
    `;
  }

  constructor() {
    super();
    this.src = "";
    this.timeAgo = "12h ago";
  }

  render() {
    return html`
      <div class="gazetaContainer">
        <img src=${this.src} alt="poza" />
        <span>${this.timeAgo}</span>
      </div>
    `;
  }
}
