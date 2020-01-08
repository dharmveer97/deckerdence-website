import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .main-heading {
    margin-bottom: 3rem;
  }
  .title {
  }
`;

const OptionToIncludes = () => {
  const curve = () => {
    `$('#simple_arc').circleType({ radius: 135 });`;
  };
  return (
    <Section className="">
      <div className="container">
        <header className="main-heading">
          <h1
            className="title has-text-weight-bold is-3 is-spaced has-text-centered"
            id="simple_arc"
            curve={curve}
          >
            OPTIONS To Includes
          </h1>
        </header>
        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <img src="/images/hire/background@2x.png" alt="" />
          </div>
          <div className="column is-one-quarter">
            <img src="/images/hire/background@2x.png" alt="" />
          </div>
          <div className="column is-one-quarter">
            {' '}
            <img src="/images/hire/background@2x.png" alt="" />
          </div>
          <div className="column is-one-quarter">
            {' '}
            <img src="/images/hire/background@2x.png" alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OptionToIncludes;