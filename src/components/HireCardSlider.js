import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import HireCard from './HireCard';

const Section = styled.div`
  background-image: url(/images/hire/decar.png);
  background-size: cover;
  background-repeat: no-repeat;
`;

class HireCardSlider extends React.Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Section className="section is-medium">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <Slider {...settings}>
                <div>
                  <HireCard />
                </div>
                <div>
                  <HireCard />
                </div>
                <div>
                  <HireCard />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default HireCardSlider;
