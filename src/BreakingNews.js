import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class BreakingNews extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="newsContainer">
        <div class="titleContainer">
          <span>Breaking news</span>
        </div>
        <news-comp image="../assets/news.jpg"></news-comp>
        <small-news
          image="../assets/news.jpg"
          title="The flames in Australia are out of control!"
        ></small-news>
        <small-news image="../assets/news.jpg"></small-news>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .newsContainer {
        background-color: rgba(255, 249, 246, 1);
        border: 1px solid rgba(218, 220, 224, 1);

        min-width: 35rem;
        height: 28rem;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      span {
        font-family: "Roboto", sans-serif !important;
        font-size: 2rem;
        font-weight: 600;
        margin-left: 5px;
      }
      .titleContainer {
        margin-bottom: 5px;
        width: 100%;
      }
      small-news {
        margin-top: 10px;
        width: 100%;
      }
      news-comp {
        width: 100%;
      }
      @media screen and (max-width: 480px) {
        .newsContainer {
          min-height: 45rem;
          min-width: 0;
        }
        span {
          margin-left: 10px;
        }
      }
      @media screen and (max-width: 1024px) {
        .newsContainer {
          width: auto;
        }
      }
      @media screen and (max-width: 800px) {
        .newsContainer {
          width: auto;
        }
      }
    `;
  }
}
