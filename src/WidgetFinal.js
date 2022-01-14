import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element/lit-element.js?module";

const weatheri = { apiKey: "03ed7966e6c64d8ac111943615cd683a" };
const img_paths = {
  rain: "/assets/heavy-rain.png",
  snow: "/assets/snow.png",
  sun: "/assets/sun.png",
  clouds: "/assets/clouds.png",
};

export class WidgetFinal extends LitElement {
  static get properties() {
    return {
      cityTarget: {
        type: String,
      },
      date: {
        type: Object,
      },
      degreeUnit: {
        type: String,
      },
      day: { type: Array },
    };
  }

  static get styles() {
    return css`
      @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
      .bigContainer {
        border: 1px solid #dadce0;
        max-width: 32rem;
        min-width: 20rem;
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
        width: 100%;
        border-top: 1px solid #bdbdbd;
      }
      .description {
        flex-grow: 1;
      }
      .description > p {
        font-family: "Inter", sans-serif;
        font-size: 1.5rem;
        color: #333333;
        line-height: 1.2rem;
      }
      .degrees {
        font-family: "Inter";
        font-size: 2rem;
        font-weight: bold;
      }
      .middleContainer {
        display: flex;
        flex-direction: column;
      }
      .pickDegrees {
        margin-top: 2rem;
      }
      .grad {
        margin-left: 0.7rem;
      }
      span:hover {
        cursor: pointer;
      }
      .bottomContainer {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
      .last {
        color: #333333;
        font-family: "Inter";
        font-size: 0.9rem;
      }
      a {
        color: #333333;
        text-decoration: none;
      }
      @media screen and (max-width: 800px) {
        .bigContainer {
          display: none;
        }
      }
    `;
  }

  constructor() {
    super();
    this.cityTarget = "Singapore";
    this.date = {
      id: {
        list: [
          {
            main: { temp: 0, temp_max: 0, temp_min: 0 },
            dt_txt: "", // the date fotmat dd-mm-yyyy hh-mm
            weather: [{ main: "Description" }],
          },
          {
            main: { temp: 0, temp_max: 0, temp_min: 0 },
            dt_txt: "",
            weather: [{ main: "Description" }],
          },
          {
            main: { temp: 0, temp_max: 0, temp_min: 0 },
            dt_txt: "",
            weather: [{ main: "Description" }],
          },
          {
            main: { temp: 0, temp_max: 0, temp_min: 0 },
            dt_txt: "",
            weather: [{ main: "Description" }],
          },
          {
            main: { temp: 0, temp_max: 0, temp_min: 0 },
            dt_txt: "",
            weather: [{ main: "Description" }],
          },
        ],
      },
    };
    this.degreeUnit = "C";
    this.day = [
      0, //current day
      1000 * 60 * 60 * 24, //next day...
      1000 * 60 * 60 * 48,
      1000 * 60 * 60 * 72,
      1000 * 60 * 60 * 96,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  setdata(jsonResp) {
    //fetch return a list with 40 items, so we need to take only the indices of the items that we are interested in
    let v = [
      this.theHour(this.day[0], jsonResp.list),
      this.theHour(this.day[1], jsonResp.list),
      this.theHour(this.day[2], jsonResp.list),
      this.theHour(this.day[3], jsonResp.list),
      this.theHour(this.day[4], jsonResp.list),
    ];
    let c = {
      id: {
        list: [
          {
            main: { temp: 0, temp_max: 0, temp_min: 0 },
            dt_txt: "",
            weather: [{ main: "Description" }],
          },
          {
            main: { temp: 0, temp_max: 0, temp_min: 0 },
            dt_txt: "",
            weather: [{ main: "Description" }],
          },
          {
            main: { temp: 0, temp_max: 0, temp_min: 0 },
            dt_txt: "",
            weather: [{ main: "Description" }],
          },
          {
            main: { temp: 0, temp_max: 0, temp_min: 0 },
            dt_txt: "",
            weather: [{ main: "Description" }],
          },
          {
            main: { temp: 0, temp_max: 0, temp_min: 0 },
            dt_txt: "",
            weather: [{ main: "Description" }],
          },
        ],
      },
    };
    for (let i = 0; i < 5; i++) {
      c.id.list[i].dt_txt = jsonResp.list[v[i]].dt_txt;
      c.id.list[i].main.temp = jsonResp.list[v[i]].main.temp;
      c.id.list[i].main.temp_max = jsonResp.list[v[i]].main.temp_max;
      c.id.list[i].main.temp_min = jsonResp.list[v[i]].main.temp_min;
      c.id.list[i].weather[0].main = jsonResp.list[v[i]].weather[0].main;
    }
    this.date = { ...c };
  }

  //perform fetch once at 2h
  async fetchData() {
    if (!localStorage.getItem("data")) {
      const resp = await fetch(
        `//api.openweathermap.org/data/2.5/forecast?q=${this.cityTarget}&units=metric&appid=${weatheri.apiKey}`
      );
      const jsonResp = await resp.json();
      this.setdata(jsonResp);

      console.log("Am fetchuit!");
      this.requestUpdate();
      console.log(this.date);

      localStorage.setItem("data", JSON.stringify(this.date));
      let hour = new Date();
      hour = hour.getTime() + 1000 * 60 * 60 * 2; //set for 2h
      localStorage.setItem("hour", JSON.stringify(hour));

      //
    } else {
      let present = new Date();
      let past = localStorage.getItem("hour");
      past = JSON.parse(past);
      present = present.getTime();
      if (present > past) {
        localStorage.clear();
        this.fetchData();
      } else {
        let state = JSON.parse(localStorage.getItem("data"));
        this.date = { ...state };
      }
    }
  }

  //getting the index of the item who contains the time we want
  theHour(delay, vector) {
    const theOne = vector.indexOf(
      vector.find(
        (item) =>
          Math.round(
            Math.abs(Date.parse(item.dt_txt) - new Date().getTime() - delay) /
              (1000 * 60)
          ) < 81
      )
    );

    return theOne;
  }

  render() {
    return html`
      <div class="bigContainer">
        <div class="middleContainer">
          <div class="cityContainer">
            <h2>${this.cityTarget}</h2>
            <div class="line"></div>
          </div>
          <div class="descrContainer">
            <div class="description">
              <p>${this.date.id.list[0].weather[0].main}</p>
              <p class="degrees">
                ${Math.round(this.date.id.list[0].main.temp)}&deg${this
                  .degreeUnit}
              </p>
            </div>
            <img
              src="${this.pickWeatherImg(this.date.id.list[0].weather[0].main)}"
              alt="broken"
            />
          </div>
          <div class="weekContainer">
            ${this.date.id.list.map((item) => {
              return html`<day-temp
                unitD=${this.degreeUnit}
                .vreme="${item}"
              ></day-temp>`;
            })}
          </div>
          <div class="bottomContainer">
            <div class="pickDegrees">
              <span
                @click="${() => {
                  this.handleCelsius(this.degreeUnit);
                  this.degreeUnit = "C";
                  this.date = { ...this.date };
                  this.requestUpdate();
                }}"
                >C</span
              >
              <span
                class="grad"
                @click="${() => {
                  this.handleF(this.degreeUnit);
                  this.degreeUnit = "F";
                  this.date = { ...this.date };
                  this.requestUpdate();
                }}"
                >F
              </span>
              <span
                class="grad"
                @click="${() => {
                  this.handleKelvin(this.degreeUnit);
                  this.degreeUnit = "K";
                  this.date = { ...this.date };
                  this.requestUpdate();
                }}"
                >K
              </span>
            </div>
            <div class="last">
              More on
              <a
                target="”_blank”"
                href="https://weather.com/ro-RO/vreme/astazi/l/ROXX0003:1:RO?Goto=Redirected"
              >
                weather.com
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  handleCelsius(unit) {
    switch (unit) {
      case "C":
        break;

      case "F":
        this.date.id.list[0].main.temp = Math.round(
          (this.date.id.list[0].main.temp - 32) / 1.8
        );

        break;

      case "K":
        this.date.id.list[0].main.temp = Math.round(
          this.date.id.list[0].main.temp - 273.15
        );

        break;

      default:
        console.log("Something went wrong");
    }
  }
  handleF(unit) {
    switch (unit) {
      case "C":
        this.date.id.list[0].main.temp = Math.round(
          this.date.id.list[0].main.temp * 1.8 + 32
        );

        break;

      case "F":
        break;

      case "K":
        this.date.id.list[0].main.temp = Math.round(
          (this.date.id.list[0].main.temp - 273.15) * 1.8 + 32
        );

        break;
      default:
        console.log("Something went wrong");
    }
  }
  handleKelvin(unit) {
    switch (unit) {
      case "C":
        this.date.id.list[0].main.temp = Math.round(
          this.date.id.list[0].main.temp + 273.15
        );

        break;

      case "F":
        this.date.id.list[0].main.temp = Math.round(
          (this.date.id.list[0].main.temp - 32) / 1.8 + 273.15
        );

        break;

      case "K":
        break;
      default:
        console.log("Something went wrong");
    }
  }

  pickWeatherImg(description) {
    let img = "";
    switch (description) {
      case "Clear":
        img = img_paths.sun;
        break;
      case "Rain":
        img = img_paths.rain;
        break;
      case "Snow":
        img = img_paths.snow;
        break;
      case "Clouds":
        img = img_paths.clouds;
        break;
      default:
        img = img_paths.sun;
        console.log("No image for this weather");
    }
    return img;
  }
}

//
//
//
//
//
//
//
//
