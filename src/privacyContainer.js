import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class Privacy extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      .container {
        width: 26rem;
        height: 15rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .socialContainer {
        margin-top: 1.2rem;
        display: flex;
        width: 100%;
        justify-content: space-around;
      }
      a {
        display: inline-block;
        text-decoration: none;
        color: inherit;
        height: 3rem;
        margin-bottom: 1rem;
      }
      button {
        cursor: pointer;
        width: 100%;
        height: 3.6rem;
        border-radius: 0.4rem;
        background-color: transparent;
        border: 1px solid #e0e0e0;
        font-size: 1.4rem;
        font-family: Roboto;
        color: #3b27f9;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 1.25px;
        padding: 1rem 0px;
      }
      .titlu {
        font-size: 1.4rem;
        font-weight: 500;
        font-family: Roboto;
        font-style: normal;

        color: rgba(0, 0, 0, 0.6);
        text-decoration-line: underline;
      }
      .description {
        font-size: 1.2rem;
        font-family: Roboto;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 1.8rem;
      }
    `;
  }

  render() {
    return html`<div class="container">
      <a href="#">
        <p class="titlu">Privacy Policy</p>
      </a>
      <p class="description">We are struggling to keep this website ad-free</p>
      <button
        @click="${() =>
          window.dispatchEvent(new CustomEvent("donate-clicked"))}"
        type="button"
      >
        DONATE
      </button>
      <div class="socialContainer">
        <social-btn
          path="/assets/fb.svg"
          link="https://www.facebook.com/kappalondon/"
        ></social-btn>
        <social-btn
          path="/assets/Group 7.svg"
          link="https://www.instagram.com/kappa.london/"
        ></social-btn>
        <social-btn
          path="/assets/Group 8.svg"
          link="https://www.linkedin.com/company/kappalondon"
        ></social-btn>
      </div>
    </div>`;
  }
}
