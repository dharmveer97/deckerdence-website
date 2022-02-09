import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundDark};
  .title {
    color: ${props => props.theme.lightAccent};
    font-weight: 200;
    font-size: ${props => props.theme.fontSizeExtra}px;
  }
  .subtitle {
    font-size: ${props => props.theme.fontFullLarge}px;
    color: ${props => props.theme.lightAccent};
    padding-top: 1rem;
  }
`;

const WelcomeBanner = ({ title, subTitle }) => (
  <Section className="section">
    <div className="container has-text-centered">
      <div>
        <span className="title is-uppercase is-size-3-mobile">{title}</span>
      </div>
      <div className="subtitle is-uppercase has-text-weight-bold is-size-2-mobile">
        {subTitle}
      </div>
    </div>
  </Section>
);

export default WelcomeBanner;
