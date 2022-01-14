import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class Test extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  static get styles() {
    return css`
      div {
        width: 200px;
        height: 100px;
        background-color: red;
      }
      .active {
        background-color: purple;
      }
    `;
  }

  constructor() {
    super();
  }
  render() {
    return html` <div></div> `;
  }
}
