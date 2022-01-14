import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class DonatePopUp extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("donate-clicked", (e) => {
      this.shadowRoot.querySelector(".popup").classList.toggle("active");
      window.scrollTo(0, 0);
    });
  }
  disconnectedCallback() {
    window.removeEventListener("donate-clicked", (e) => {
      this.shadowRoot.querySelector(".popup").classList.toggle("active");
    });
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="popup" id="popup-1">
        <div class="overlay"></div>

        <div class="content">
          <div
            class="close-btn"
            @click="${() =>
              this.shadowRoot
                .querySelector(".popup")
                .classList.toggle("active")}"
          >
            &times;
          </div>
          <p>
            If you like what we do consider supporting us on these platforms
          </p>

          <div class="line"></div>

          <div class="text">Support us through...</div>

          <div
            class="btnContainer"
            @click="${() => window.open(`https://www.google.com/`, `_blank`)}"
          >
            <div class="donate-btn">
              <img src="/assets/paypal.svg" alt="" />
              <span>Paypal</span>
            </div>

            <div
              class="donate-btn"
              @click="${() => window.open(`https://www.google.com/`, `_blank`)}"
            >
              <img src="/assets/revolut.svg" alt="" />
              <span>Revolut</span>
            </div>

            <div
              class="donate-btn patreon"
              @click="${() => window.open(`https://www.google.com/`, `_blank`)}"
            >
              <img src="/assets/patreon.svg" alt="" />
              <span>Patreon</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      * {
        font-family: Roboto;
      }
      .close-btn {
        width: 30px;
        height: 30px;
        font-size: 25px;
        position: absolute;
        top: 1rem;
        right: 1rem;
        border-radius: 50%;
        cursor: pointer;
        text-align: center;
        line-height: 30px;
      }
      .close-btn:hover {
        background: rgba(0, 0, 0, 0.1);
      }
      .popup.active .overlay {
        display: block;
      }
      .popup.active .content {
        transition: all 300ms ease-in-out;
        transform: translate(-50%, -50%) scale(1);
      }

      .popup .overlay {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        z-index: 3;
        display: none;
      }
      .content {
        border: 1px solid #dadce0;
        width: 65rem;
        height: 22rem;
        display: flex;
        flex-direction: column;
        padding: 25px;
        border-radius: 10px;
        background: #ffffff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: #fff;
        z-index: 10;
      }
      .btnContainer {
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;
      }
      p {
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0.1px;
        color: rgba(0, 0, 0, 0.6);
      }
      .line {
        height: 1px;
        width: 100%;
        border-bottom: 1px solid #bdbdbd;
      }
      .text {
        text-align: center;
        margin-top: 1.5rem;
        font-size: 2rem;
        font-weight: 500;
      }
      .donate-btn {
        cursor: pointer;
        height: 6rem;
        width: 17rem;
        border: 1px solid rgba(224, 224, 224, 1);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        color: #828282;
        font-size: 1.2rem;
      }
      span {
        margin-top: 0.5rem;
      }

      @media screen and (max-width: 500px) {
        .content {
          width: 37.5rem;
          height: 31rem;
          padding: 5px;
        }
        .btnContainer {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: auto auto;
          grid-template-rows: auto 1fr;
        }

        .donate-btn {
          width: 16rem;
        }
        .patreon {
          width: auto;
          grid-column: 1/3;
        }
      }
    `;
  }
}
