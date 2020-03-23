import React from 'react';
import { graphql, Link } from 'gatsby';

import styled from 'styled-components';
import ButtonGlobal from '../components/elements/ButtonGlobal';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';

const Section = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  .column {
    background-image: url(/images/towbar/frame@2x.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 600px;
    justify-content: center;
    display: grid;
    padding: 3rem 12rem;
    margin-top: 0.5rem !important;
    @media screen and (max-width: 768px) {
      padding: 3rem 3rem;
    }
  }
  .title {
    margin-top: 8rem;
  }
  .button-wrapper {
    padding-bottom: 3rem;
  }
`;

const Columns = styled.div`
  margin-top: 1rem;
  .column {
    margin-top: -1rem;
    .is-5by4 {
      width: 100%;
      height: 100%;
    }

    .is-5by4 .img-top {
      display: none;

      position: absolute;
      z-index: 99;
    }
    .is-5by4:hover .img-top {
      display: inline;
    }
  }
`;

export const towBarQuery = graphql`
  query towBar {
    sanitySiteSettings {
      towBarSeoTitle
      towBarSeoKeywords
      towBarSeoMetaDescription
      towBarMainTitle
      towBarMainSubtitle
      towBarFrameTitle
      towBarFrameSubtitle
      towBarFrameDescription
      towBarBackgroundImage {
        asset {
          url
        }
      }
      towBarGallery {
        galleryItems {
          blackAndWhiteImage {
            asset {
              url
            }
          }
          coloredImage {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;
const TowBarPage = ({ data, onMouseOver }) => {
  const page = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={page.towBarSeoTitle}
        description={page.towBarSeoMetaDescription}
        keywords={page.towBarSeoKeywords}
      />
      <PageHeading
        title={page.towBarMainTitle}
        subTitle={page.towBarMainSubtitle}
      />
      <Section
        className="section is-large"
        bgImage={page.towBarBackgroundImage.asset.url}
      >
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <h1 className="title is-3 is-size-6-mobile has-text-centered has-text-white is-size-4-mobile has-text-weight-normal">
                {page.towBarFrameTitle}
              </h1>
              <h1 className="subtitle is-3 is-size-6-mobile is-uppercase has-text-weight-bold has-text-centered has-text-white is-size-4-mobile">
                {page.towBarFrameSubtitle}
              </h1>
              <p className="subtitle is-5 has-text-centered has-text-white is-size-6-mobile">
                {page.towBarFrameDescription}
              </p>
              <div className="has-text-centered button-wrapper">
                <Link to="/contact">
                  <ButtonGlobal title="Enquire Today" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Columns className="columns is-multiline is-variable is-1">
        {page.towBarGallery.galleryItems.map(items => (
          <div className="column is-6">
            <figure className="image is-5by4">
              <img
                src={items.blackAndWhiteImage.asset.url}
                onFocus={onMouseOver}
                alt="coloredImage"
              />
              <img
                src={items.coloredImage.asset.url}
                className="img-top"
                alt="blackImage"
              />
            </figure>
          </div>
        ))}
      </Columns>
    </Layout>
  );
};

export default TowBarPage;