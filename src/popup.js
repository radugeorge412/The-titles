import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

const tags = ["Vaccine", "Covid-19", "News"];
const surse = [1, 2, 3, 4, 5, 6];

export class Popup extends LitElement {
  static get properties() {
    return {
      title: {
        type: String,
      },
      editor: {
        type: String,
      },
      agencyName: {
        type: String,
      },
      timeAgo: {
        type: String,
      },
      tags: {
        type: Array,
      },
      surse: {
        type: Array,
      },
      image: {
        type: String,
      },
    };
  }
  constructor() {
    super();
    this.title = "Title";
    this.agencyName = "Kappa";
    this.timeAgo = "19h ago";
    this.tags = [...tags];
    this.surse = [...surse];
    this.editor = "Peter Parker";
    this.quote =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo leo a risus molestie, vel accumsan arcu faucibus. Praesent ac maximus tortor, eu vehicula felis. Fusce laoreet leo erat. Ut nisi ipsum, feugiat nec aliquam at, consectetur sed orci. Suspendisse potenti. Sed rhoncus placerat nulla, vel sagittis odio consequat nec. Nunc a facilisis enim. Quisque tempus, elit molestie molestie mollis, erat est pulvinar lorem, vitae convallis orci nulla sed ipsum. Cras varius velit sed risus auctor varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse consectetur nisl id ullamcorper ullamcorper. Suspendisse venenatis, leo nec porta placerat, eros leo bibendum nulla, consequat placerat eros lorem ut ante. ";
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popup", (e) => {
      this.shadowRoot.querySelector("#popup-2").classList.toggle("active");
      this.title = e.detail.title;
      this.quote = e.detail.descriere;
      this.image = e.detail.image;
      this.timeAgo = e.detail.timp;
    });
  }

  disconnectedCallback() {
    window.removeEventListener("popup", () => {
      this.shadowRoot.querySelector("#popup-2").classList.toggle("active");
    });
    super.disconnectedCallback();
  }

  render() {
    return html`<div class="popup" id="popup-2">
      <div class="overlay" @click="${() => {
        this.shadowRoot.querySelector("#popup-2").classList.toggle("active");
        window.dispatchEvent(new CustomEvent("closePop"));
      }}"></div>
      <div class="content">
        <div
          class="close-btn"
          @click="${() => {
            this.shadowRoot
              .querySelector("#popup-2")
              .classList.toggle("active");
            window.dispatchEvent(new CustomEvent("closePop"));
          }}"
        >
          &times;</div>
          <div class="up">
            <div class="header">
              <div class="headerText">
                <p>${this.title}</p>
                <span> ${this.agencyName} - ${this.timeAgo} </span>
              </div>
              <div class="quoteContainer">
                <div class="editorContainer">Editor's quote</div>
                <p>by ${this.editor}</p>
                <p class="quote">&#8221;${this.quote}&#8220;</p>
              </div>
            </div>
            <img src="${this.image}" alt="image" />
          </div>
          <div class="tagsANDsocial">
            <div class="taguri">
              ${this.tags.map(
                (item) => html`<custom-tag name="${item}"></custom-tag>`
              )}
            </div>
            <div class="share">
              <img src="/assets/share/link.svg" alt="" />
              <img src="/assets/share/insta.svg" alt="" />
              <img src="/assets/share/fb.svg" alt="" />
              <img src="/assets/share/in.svg" alt="" />
            </div>
          </div>
          <div class="surse">
            ${this.surse.map((item) => html`<popup-surs></popup-surs>`)}
          </div>
        </div>
      </div>
    </div>`;
  }

  static get styles() {
    return css`
      * {
        font-family: Roboto;
      }
      #popup-2 {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .overlay {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        z-index: 3;
        display: none;
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
      .editorContainer {
        display: inline-block;
        background: rgba(111, 207, 151, 0.5);
        border-radius: 0.5rem;
        padding: 0.3rem 0.6rem;
        font-size: 1.2rem;
      }
      .quoteContainer p:first-of-type {
        margin: 0.5rem 0rem -0.5rem 0rem;
        font-size: 1.2rem;
      }
      .tagsANDsocial {
        display: flex;
        justify-content: space-between;
      }
      .taguri {
        display: flex;
        flex-wrap: wrap;
        align-self: center;
      }
      custom-tag {
        margin-left: 5px;
      }
      .share {
        margin-top: 1.7rem;
        margin-bottom: 1.7rem;
      }
      .share img {
        margin-left: 1rem;
      }
      .quote {
        color: rgb(130, 130, 130);
        font-size: 1.2rem;
      }
      .headerText p {
        margin-bottom: 1rem;
        margin-top: 0;
        padding: 0;
        color: rgba(0, 0, 0, 0.87);
        font-size: 2rem;
      }

      .headerText span {
        color: rgba(0, 0, 0, 0.54);
        font-size: 1.2rem;
      }
      .headerText {
        margin-bottom: 1rem;
      }
      .header {
        margin-right: 1rem;
      }
      .up {
        display: flex;
      }
      .up img {
        width: 12.5rem;
        height: 12.5rem;
        align-self: center;
      }
      .quoteContainer {
        border: 1px solid #f2f2f2;
        border-radius: 5px;
        padding: 1rem;
      }
      .content::-webkit-scrollbar {
        display: none;
      }
      .content {
        width: 65rem;
        max-height: 40rem;
        overflow: scroll;
        border: 1px solid rgb(218, 220, 224);
        border-radius: 1rem;
        background: #ffffff;
        position: fixed;
        display: none;
        padding: 20px;
        z-index: 4;
        top: 10vh;
        -ms-overflow-style: none;
        scrollbar-width: none; /* Firefox */
      }
      #popup-2.active .overlay {
        display: block;
      }
      #popup-2.active .content {
        display: block;
        transition: all 300ms ease-in-out;
      }

      @media screen and (max-width: 750px) {
        .content {
          width: 34rem;
        }
        .up img {
          display: none;
        }
        .tagsANDsocial {
          padding-top: 1.5rem;
          flex-direction: column;
          justify-content: flex-start;
        }
        .taguri {
          flex-wrap: nowrap;
          align-self: flex-start;
          overflow-x: scroll;
        }
        .taguri {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .taguri::-webkit-scrollbar {
          display: none;
        }
      }
    `;
  }
}
