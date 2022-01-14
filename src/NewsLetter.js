import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class NewsLetter extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <form>
          <fieldset>
            <legend>Subscribe to newsmail</legend>
            <input
              class="textInput"
              @focus="${(e) => (e.target.style.outline = "none")}"
              type="text"
              placeholder="Your email"
              id="fname"
              name="fname"
            /><br />
          </fieldset>
          <input type="submit" value="SUBSCRIBE" />
        </form>
      </div>
    `;
  }
  static get styles() {
    return css`
      * {
        font-family: Roboto;
      }
      div {
        margin-top: 1.5rem;
        max-width: 33rem;
        min-width: 20rem;
      }
      input[type="submit"]:hover {
        cursor: pointer;
      }

      input[type="submit"] {
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.12);
        padding: 10px 14px;
        border-radius: 0;
        background: #ffffff;
        margin-top: 5px;
        color: #3b27f9;
        border-radius:0.4rem;
      }
      input[type="text"] {
        width: 90%;
        height: 90%;
        margin-left:10px;
        border-style: none;
        font-size: 1.6rem;
        color: #828282;
      }

      fieldset {
        border: 1px solid rgba(0, 0, 0, 0.12);
        max-width: 33rem;
        min-width: 20rem;
        height: 5rem;
        padding: 0;
        margin: 0;
        border-radius:0.3rem;
      }
      legend {
        font-size: 1.2rem;
        margin-left: 1.2rem;
      }
      @media screen and (max-width: 800px) {
        div {
          display: none;
        }
    `;
  }
}
