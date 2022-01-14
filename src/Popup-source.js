import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class PopupSource extends LitElement {
  static get properties() {
    return {
      image: {
        type: String,
      },
      timeAgo: {
        type: String,
      },
      title: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.image = "/assets/heart.png";
    this.timeAgo = "5h ago";
    this.title = "News title";
  }

  render() {
    return html`<div class="container">
      <div class="sourceContainer">
        <img src="${this.image}" alt="image" />
        <span>${this.timeAgo}</span>
      </div>
      <p>${this.title}</p>
      <div>
        <img src="/assets/RArrow.svg" alt="" />
      </div>
    </div>`;
  }

  static get styles() {
    return css`
      :host(:hover) {
        cursor: pointer;
      }
      * {
        font-family: Roboto;
      }
      .container {
        width: auto;
        margin-bottom: 5px;
        background: #f9f9f9;
        display: flex;
        border: 1px solid #dadce0;
        padding: 6px 9px;
        border-radius: 5px;
        align-items: center;
      }

      .sourceContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .sourceContainer img {
        width: 3.3rem;
        height: 3.3rem;
      }
      .sourceContainer span {
        font-weight: 400;
        font-size: 1rem;
      }
      p {
        color: #000000;
        flex-grow: 1;
        padding: 0px 1.5rem;
        font-size: 1.4rem;
      }
    `;
  }
}
