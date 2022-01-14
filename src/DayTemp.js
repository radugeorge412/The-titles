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

export class DayTemp extends LitElement {
  static get properties() {
    return {
      unitD: { type: String },
      dayName: { type: String },
      vreme: { type: Object },
      unitDchanged: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    this.dayName = "";
    this.vreme = {
      main: { temp: 0, temp_max: 0, temp_min: 0 },
      dt_txt: "",
      weather: [{ main: "Description" }],
    };
    this.unitD = "C";
    this.unitDchanged = "C";
  }

  static get styles() {
    return css`
      .tempContainer {
        height: 7.3rem;
        width: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
        flex-direction: column;
      }

      h3,
      p {
        flex-shrink: 1;
        font-family: "Roboto";
        margin-top: 0;
      }

      .day {
        align-self: flex-start;
        font-size: 1rem;
        line-height: 120%;
        color: #333333;
      }
      .maxT {
        font-size: 0.9rem;
        color: #333333;
        margin: 0.5rem 0rem;
      }
      .minT {
        font-size: 0.9rem;
        color: #828282;
      }
      img {
        width: 2.7rem;
      }
    `;
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
    }
    return img;
  }

  handleChange() {
    if (this.unitD === "C") {
      this.handleCelsius(this.unitDchanged);
      this.unitDchanged = "C";
    } else if (this.unitD === "F") {
      this.handleF(this.unitDchanged);
      this.unitDchanged = "F";
    } else {
      this.handleK(this.unitDchanged);
      this.unitDchanged = "K";
    }
  }

  formatDay() {
    if (this.dayName === "Today") return "Today";
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let d = this.vreme.dt_txt;
    d = new Date(d);
    let x = new Date();
    if (x.getDay() === d.getDay()) return "Today";
    return days[d.getDay()];
  }

  handleCelsius(unit) {
    switch (unit) {
      case "C":
        break;

      case "F":
        this.vreme.main.temp_max = Math.round(
          (this.vreme.main.temp_max - 32) / 1.8
        );

        this.vreme.main.temp_min = Math.round(
          (this.vreme.main.temp_min - 32) / 1.8
        );

        break;

      case "K":
        this.vreme.main.temp_max = Math.round(
          this.vreme.main.temp_max - 273.15
        );

        this.vreme.main.temp_min = Math.round(
          this.vreme.main.temp_min - 273.15
        );

        break;

      default:
        console.log("Something went wrong");
    }
  }
  handleF(unit) {
    switch (unit) {
      case "C":
        this.vreme.main.temp_max = Math.round(
          this.vreme.main.temp_max * 1.8 + 32
        );
        this.vreme.main.temp_min = Math.round(
          this.vreme.main.temp_min * 1.8 + 32
        );

        break;

      case "F":
        break;

      case "K":
        this.vreme.main.temp_max = Math.round(
          (this.vreme.main.temp_max - 273.15) * 1.8 + 32
        );
        this.vreme.main.temp_min = Math.round(
          (this.vreme.main.temp_min - 273.15) * 1.8 + 32
        );

        break;
      default:
        console.log("Something went wrong");
    }
  }
  handleK(unit) {
    switch (unit) {
      case "C":
        this.vreme.main.temp_max = Math.round(
          this.vreme.main.temp_max + 273.15
        );
        this.vreme.main.temp_min = Math.round(
          this.vreme.main.temp_min + 273.15
        );

        break;

      case "F":
        this.vreme.main.temp_max = Math.round(
          (this.vreme.main.temp_max - 32) / 1.8 + 273.15
        );
        this.vreme.main.temp_min = Math.round(
          (this.vreme.main.temp_min - 32) / 1.8 + 273.15
        );

        break;

      case "K":
        break;
      default:
        console.log("Something went wrong");
    }
  }
  // connectedCallback() {
  //   super.connectedCallback();
  //   setTimeout(() => this.requestUpdate(), 2000);
  // }
  // disconnectedCallback() {
  //   super.disconnectedCallback();
  // }

  render() {
    // this.vreme = { ...this.vreme };
    if (this.unitD !== this.unitDchanged) this.handleChange();
    return html`
      <div class="tempContainer">
        <p class="day">${this.formatDay()}</p>
        <img
          src=${this.pickWeatherImg(this.vreme.weather[0].main)}
          alt="cloud img"
        />
        <p class="maxT">
          ${Math.round(this.vreme.main.temp_max)}&deg${this.unitD}
        </p>
        <p class="minT">
          ${Math.round(this.vreme.main.temp_min)}&deg${this.unitD}
        </p>
      </div>
    `;
  }
}
