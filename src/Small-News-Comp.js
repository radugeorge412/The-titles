import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class SmallNews extends LitElement {
  static get properties() {
    return {
      image: { type: String },
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.image = "";
    this.title = "News title";
  }

  render() {
    return html`<div class="container">
      <div class="imgContainer">
        <img src="${this.image}" alt="poza" />
      </div>
      <div class="textContainer">
        <p>${this.title}</p>
      </div>
      <div class="arrowContainer">
        <img src="/assets/RArrow.svg" alt="sageata" />
      </div>
    </div>`;
  }

  static get styles() {
    return css`
      :host(:hover) {
        cursor: pointer;
        display: inline-block;
      }
      .container {
        border: 1px solid rgba(218, 220, 224, 1);
        display: flex;
        align-items: center;
        height: 5rem;
        border-radius: 5px;
        background-color: #ffffff;
      }
      .imgContainer {
        min-width: 12.5rem;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px 0px 0px 5px;
      }
      .textContainer {
        margin: 0px 10px;
        flex-grow: 1;
        display: flex;
        align-items: center;
        min-height: 5rem;
      }
      p {
        margin: 0;
        padding: 0;
        font-family: "Roboto";
        font-size: 1.4rem;
        font-weight: 500;
      }
      .arrowContainer {
        padding: 0px 15px 0px 0px;
        min-width: 1.4rem;
      }

      @media screen and (max-width: 480px) {
        .container {
          width: auto;
          height: 7rem;
        }
        .arrowContainer {
          cursor: pointer;
        }
      }
    `;
  }
}
