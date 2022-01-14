import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

const vector = [
  { time: "19h" },
  { time: "20h" },
  { time: "121h" },
  { time: "121h" },
  { time: "121h" },
  { time: "121h" },
];

export class NewsHeadline extends LitElement {
  static get properties() {
    return {
      description: {
        type: String,
      },
      image: {
        type: String,
      },
      id: {
        type: Number,
      },
      title: {
        type: String,
      },
      agencyName: {
        type: String,
      },
      timeAgo: {
        type: String,
      },
      sources: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.timeAgo = "19h ago";
    this.agencyName = "News";
    this.sources = [...vector];
    this.title = "News title";
  }

  _calcTimeAgo() {
    let d = this.timeAgo;
    d = new Date(d);
    let now = new Date();
    let hours = now.getTime() - d.getTime();

    hours = Math.floor((hours / (1000 * 60 * 60)) % 24);
    if (hours > 24) {
      let days;
      days = Math.floor(hours / 24);
      this.timeAgo = days + " d ago";
    } else this.timeAgo = hours + " hours ago";
  }

  render() {
    this._calcTimeAgo();
    //console.log(this._calcTimeAgo());
    return html` <div class="container">
      <div class="innerContainer">
        <div class="textContainer">
          <div class="spanContainer">
            <span class="title">${this.title}</span>
            <span class="agency-time"
              >${this.agencyName} - ${this.timeAgo}</span
            >
          </div>
          <img src="${this.image}" alt="image" />
        </div>
        <div class="sourcesContainer">
          ${this.sources.map(
            (item) => html`<source-news src="/assets/heart.svg"></source-news>`
          )}
        </div>
        <button
          type="button"
          @click="${() =>
            window.dispatchEvent(
              new CustomEvent("popup", {
                detail: {
                  title: this.title,
                  agency: this.agencyName,
                  descriere: this.description,
                  image: this.image,
                  timp: this.timeAgo,
                },
              })
            )}"
        >
          VIEW FULL COVERAGE
        </button>
      </div>
      <img class="absolute" src="${this.image}" alt="image" />
    </div>`;
  }

  static get styles() {
    return css`
      .textContainer {
        display: flex;
        width: auto;
      }
      .spanContainer {
        display: flex;
        flex-direction: column;
        width: calc(100% - 9rem);
      }
      .textContainer img {
        width: 7.7rem;
        height: 7.7rem;
        object-fit: cover;
        display: none;
      }
      .container {
        margin-top: 1.5rem;
        position: relative;
        min-width: 40rem;
        border: 1px solid rgb(218, 220, 224);
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        padding: 2.5rem;
      }
      .innerContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .title {
        color: rgba(0, 0, 0, 0.87);
        font-family: "Roboto";
        font-size: 2rem;
        font-weight: 600;
      }
      .absolute {
        width: 8rem;
        height: 8rem;
        position: absolute;
        right: 2.5rem;
        top: 2.5rem;
      }
      .agency-time {
        font-family: "Roboto";
        margin-top: 0.4rem;
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.54);
      }
      .sourcesContainer {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        width: calc(100% - 9rem);
        height: auto;
      }
      source-news {
        margin-right: 10px;
        margin-bottom: 5px;
      }
      button {
        display: inline-block;
        font-family: Roboto;
        width: fit-content;
        font-size: 1.4rem;
        color: rgba(59, 39, 249, 1);
        font-weight: 500;
        background-color: transparent;
        text-align: center;
        cursor: pointer;
        margin-top: 1.5rem;
        border-style: none;
      }
      @media screen and (max-width: 480px) {
        .container {
          min-height: 23rem;
          padding: 1.5rem;
          min-width: 0;
        }
        .sourcesContainer {
          flex-wrap: nowrap;
          width: auto;
          height: 10rem;
          overflow-x: scroll;
        }
        .sourcesContainer {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .sourcesContainer::-webkit-scrollbar {
          display: none;
        }
        .absolute {
          display: none;
        }
        .textContainer img {
          display: inline;
        }
      }
    `;
  }
}
