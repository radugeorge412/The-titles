import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

export class BigWidget extends LitElement {
  static get styles() {
    return css`
      @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
      .bigContainer {
        position: absolute;
        top: 10rem;
        left: 20rem;
        border: 1px solid #dadce0;

        width: 32rem;
        height: 27rem;
        padding: 2.5rem;
        border-radius: 1.5rem;
      }

      .cityContainer > h2 {
        font-family: "Roboto";
        font-size: 2rem;
        line-height: 2.3rem;
        margin-top: 0px;
      }
      .weekContainer {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
      }

      img {
        width: 6rem;
        align-self: flex-end;
      }
      .descrContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.7rem;
      }
      .line {
        height: 2rem;
        width: 95%;
        border-top: 1px solid #bdbdbd;
      }
      .description {
        flex-grow: 1;
      }
      .description > p {
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        color: #333333;
        line-height: 1.2rem;
      }
      .description > h1 {
        font-family: "Inter";
        font-size: 2rem;
      }

      .middleContainer {
        display: flex;
        flex-direction: column;
      }
    `;
  }
  render() {
    return html`
      <div class="bigContainer">
        <div class="middleContainer">
          <div class="cityContainer">
            <h2>Bucharest</h2>
            <div class="line"></div>
          </div>
          <div class="descrContainer">
            <div class="description">
              <p>Descriere</p>
              <h1>Grade</h1>
            </div>
            <img src="../assets/sun.png" alt="broken" />
          </div>
          <div class="weekContainer">
            <day-temp></day-temp>
            <day-temp></day-temp>
            <day-temp></day-temp>
            <day-temp></day-temp>
            <day-temp></day-temp>
          </div>
        </div>
      </div>
    `;
  }
}
