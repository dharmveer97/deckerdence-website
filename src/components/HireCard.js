import React from 'react';

import styled from 'styled-components';

const CardSection = styled.div`
  box-shadow: none;
  background-color: transparent;
  padding-top: 5rem;
`;

const HireCard = ({ title, subtitle, description }) => (
  <CardSection className="card">
    <div className="card-content">
      <h1 className="title is-spaced has-text-white has-text-centered is-3 is-uppercase">
        {title}
      </h1>
      <p className="subtitle has-text-centered has-text-white">{subtitle}</p>
      <h1 className="subtitle is-3 has-text-centered is-spaced has-text-weight-bold  has-text-white">
        {description}
      </h1>
    </div>
  </CardSection>
);

export default HireCard;
