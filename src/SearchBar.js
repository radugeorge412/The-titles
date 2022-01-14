import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class SearchBar extends LitElement {
  static get properties() {
    return {
      timpCautare: { type: Number },
    };
  }

  static get styles() {
    return css`
      .search {
        display: flex;
        align-items: center;
        height: 3.5rem;
        width: 90%;
        border-radius: 0.5rem;
        background-color: #f5f5f5;
      }

      img {
        margin-left: 1rem;
      }
      input {
        flex-grow: 1;
        margin-right: 0.7rem;
        font-size: 1.2rem;
        font-family: "Roboto", sans-serif;
      }
      .search input {
        border: none;

        background-color: #f5f5f5;
      }
      .searchIcon,
      input {
        padding: 1rem;
        margin-left: 1rem;
      }
    `;
  }

  constructor() {
    super();
    this.timpCautare = 2000;
  }

  render() {
    return html`<div class="search">
      <div className="searchIcon">
        <img src="/assets/searchIcon.png" alt="search" width="13rem" />
      </div>
      <input
        @focus="${this._searchFocus}"
        @keyup="${this._cautaInput}"
        type="text"
        placeholder="Search"
      />
    </div>`;
  }

  _searchFocus(e) {
    e.target.style.outline = "none";
  }

  timer;
  _cautaInput(e) {
    // console.log(this.shadowRoot.querySelector("input"));
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (this.shadowRoot.querySelector("input").value) {
        console.log(this.shadowRoot.querySelector("input").value);
      }
      return;
    }, this.timpCautare);
  }
}
