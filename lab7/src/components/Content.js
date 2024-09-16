import React, { Component } from "react";

class Content extends Component {
  state = {
    tenthElementColor: "#fff",
    tenthElementTextColor: "#000",
    eleventhElementColor: "#fff",
    eleventhElementTextColor: "#000",
  };

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  handleElementClick = (id) => {
    const backgroundColor = this.getRandomColor();
    const textColor = this.getRandomColor();
    if (id === "10el") {
      this.setState({
        tenthElementColor: backgroundColor,
        tenthElementTextColor: textColor,
      });
    } else if (id === "eleven") {
      this.setState({
        eleventhElementColor: backgroundColor,
        eleventhElementTextColor: textColor,
      });
    }
  };

  render() {
    return (
      <div>
        <h3>Моє хобі:</h3>
        <ul>
          <li>Музика</li>
          <li>Соціальні мережі</li>
          <li>Криптовалюта</li>
        </ul>

        <h3>Три мої улюблені фільми:</h3>
        <ol>
          <li
            id="10el"
            style={{
              backgroundColor: this.state.tenthElementColor,
              color: this.state.tenthElementTextColor,
            }}
            onClick={() => this.handleElementClick("10el")}
          >
            Паразити
          </li>
          <li
            id="eleven"
            style={{
              backgroundColor: this.state.eleventhElementColor,
              color: this.state.eleventhElementTextColor,
            }}
            onClick={() => this.handleElementClick("eleven")}
          >
            Джокер
          </li>
          <li>Міньйони (будь-які)</li>
        </ol>

        <h3>Місто, яке мені сподобалося:</h3>
        <p>
          Я обожнюю{" "}
          <a href="https://uk.wikipedia.org/wiki/%D0%92%D1%80%D0%BE%D1%86%D0%BB%D0%B0%D0%B2">
            Вроцлав
          </a>
          , бо він мені здається схожим по життю на Київ
        </p>
      </div>
    );
  }
}

export default Content;
