import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

let v = [
  "Politic",
  "Headlines",
  "News",
  "Headlines",
  "News",
  "Headlines",
  "News",
  "Headlines",
  "News",
];

export class OrizontalMenu extends LitElement {
  static get properties() {
    return {
      categorii: {
        type: Array,
      },
      mouseDown: {
        type: Boolean,
      },
      startX: {
        type: Number,
      },
      scrollLeft: { type: Number },
    };
  }
  constructor() {
    super();
    this.categorii = [...v];
    this.mouseDown = false;
    this.startX = 0;
    this.scrollLeft = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("load", () => {
      this.shadowRoot.querySelector(".container").scrollLeft = "0";
    });
  }
  disconnectedCallback() {
    window.removeEventListener("load", () => {
      this.shadowRoot.querySelector(".container").scrollLeft = "0";
    });
    super.disconnectedCallback();
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        overflow-x: scroll;
      }
      .container::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }
      .inner {
        display: flex;
      }
      orizontal-comp {
        flex-grow: 1;
      }
      @media screen and (min-width: 800px) {
        .container {
          display: none;
        }
      }
    `;
  }

  preventClick(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  startDragging(e) {
    e.preventDefault();
    this.mouseDown = true;
    this.startX =
      e.pageX - this.shadowRoot.querySelector(".container").offsetLeft;
    this.scrollLeft = this.shadowRoot.querySelector(".container").scrollLeft;
  }
  stopDragging(e) {
    e.preventDefault();
    this.mouseDown = false;
  }

  render() {
    return html` <div
      class="container"
      @mousedown="${this.startDragging}"
      @mouseup="${this.stopDragging}"
      @mousemove="${(e) => {
        if (!this.mouseDown) {
          return;
        }
        e.preventDefault();
        const x =
          e.pageX - this.shadowRoot.querySelector(".container").offsetLeft;
        const scroll = x - this.startX;
        this.shadowRoot.querySelector(".container").scrollLeft =
          this.scrollLeft - scroll;
      }}"
    >
      <div class="inner">
        ${this.categorii.map(
          (item) => html`<orizontal-comp name="${item}"></orizontal-comp>`
        )}
      </div>
    </div>`;
  }
}
