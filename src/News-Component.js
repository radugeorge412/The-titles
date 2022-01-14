import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class NewsComponent extends LitElement {
  static get properties() {
    return {
      image: { type: String },
      title: { type: String },
      timeAgo: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.image = "";
    this.title = "News title";
    this.timeAgo = "1000 hours ago";
  }

  render() {
    return html`<div class="container">
      <div class="imageContainer item">
        <img src="${this.image}" alt="Image" />
      </div>
      <div class="textContainer item">
        <p>${this.title}</p>
        <span>${this.timeAgo}</span>
      </div>
    </div>`;
  }

  static get styles() {
    return css`
      .container {
        border: 1px solid #dadce0;
        border-radius: 10px;
        height: 12.5rem;
        display: flex;
        background-color: #ffffff;
      }
      .imageContainer {
        height: auto;
        width: 12.5rem;
      }
      .textContainer {
        flex-grow: 1;
        padding: 0px 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: center;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 0px 0px 10px;
      }
      p {
        font-family: "Roboto";
        font-weight: 600;
        font-size: 2rem;
        margin: 0;
        padding: 0;
      }
      span {
        color: rgba(130, 130, 130, 1);
        font-family: "Roboto";
        font-size: 1rem;
        margin-top: 0.7rem;
      }

      @media screen and (max-width: 500px) {
        .container {
          width: auto;
          height: 27.5rem;
          display: flex;
          flex-direction: column;
        }
        .imageContainer {
          width: auto;
          height: 19rem;
        }
        img {
          border-radius: 10px 10px 0px 0px;
        }
        .textContainer {
          align-self: flex-start;
          margin-top: 1rem;
        }
      }
    `;
  }
}
