import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class Test2 extends LitElement {
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
        background-color: blue;
      }
      .active {
        background-color: red;
      }
    `;
  }

  constructor() {
    super();
  }
  render() {
    return html` <div></div> `;
  }

  onStateChanged(state) {
    if (Boolean(state.schimba) == "true")
      this.shadowRoot.querySelector("div").classList.add("active");
  }
}
