import React from "react";
import { Range } from "react-range";
import Slider from "react-slick";

class Intro extends React.Component {
  state = { values: [50] };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Range
          step={0.1}
          min={0}
          max={100}
          values={this.state.values}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                backgroundColor: "#ccc",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                backgroundColor: "#999",
              }}
            />
          )}
        />

        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Intro;
