import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

const tags = ["Vaccine", "Covid-19", "News", "Police", "Design", "Marketing"];

export class TagContainer extends LitElement {
  static get properties() {
    return {
      tags: {
        type: Array,
      },
    };
  }
  constructor() {
    super();
    this.tags = tags;
  }

  render() {
    return html`
      <div class="container">
        <p>Tags</p>
        <div class="line"></div>
        <div class="tagsContainer">
          ${this.tags.map(
            (item) => html`<custom-tag name="${item}"></custom-tag>`
          )}
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
      }
      :host {
        display: inline-block;
      }
      p {
        padding: 0;
        margin: 0;
        margin-bottom: 1.5rem;
        color: rgba(0, 0, 0, 0.87);
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 500;
        line-height: 2.3rem;
      }
      .container {
        margin-top: 1.5rem;
        display: inline-block;
        background: #f9f9f9;
        border: 1px solid rgb(218, 220, 224);
        border-radius: 15px;
        padding: 2.5rem;
        max-width: 32rem;
        min-width: 20rem;
      }
      .tagsContainer {
        display: flex;
        flex-wrap: wrap;
      }
      custom-tag {
        margin-right: 5px;
        margin-top: 5px;
      }
      .line {
        width: 100%;
        border-bottom: 1px solid rgb(189, 189, 189);
        margin-bottom: 1.5rem;
      }
      @media screen and (max-width: 800px) {
        .container {
          display: none;
        }
      } ;
    `;
  }
}
