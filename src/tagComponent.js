// import { LitElement, html, css } from "lit";
import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class Tag extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },
    };
  }
  
  constructor() {
    super();
    this.name = "Tag";
  }

  render() {
    return html` <div class="container">${this.name}</div> `;
  }

  static get styles() {
    return css`
      * {
        font-family: Roboto;
      }
      :host(:hover) {
        cursor: pointer;
      }
      .container {
        display: inline-block;
        padding: 2px 12px;
        background: #ffffff;
        border: 1px solid rgb(224, 224, 224);
        border-radius: 1.6rem;
        font-size: 1rem;
        line-height: 2rem;
      }
    `;
  }
}
