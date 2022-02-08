import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { FaYoutube } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const query = graphql`
  query socialUrlQuery {
    sanityGlobals {
      instagram
      facebook
      youtube
      twitter
    }
  }
`;

const Container = styled.div``;
// const Container = styled.div(({ flex }) => [
//   tw`sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start`,
//   flex && tw`inline-flex`,
// ]);

const IconWrapper = styled.div``;

// const IconWrapper = styled.div(({ type, variant }) => [
//   tw`border-green hover:-translate-y-1 p-1 transition duration-500 ease-in-out transform border-2`,
//   type === 'twitter' && tw`hover:border-blue-900`,
//   type === 'instagram' && tw`hover:border-purple-500`,
//   type === 'youtube' && tw`hover:border-red-800`,
//   type === 'facebook' && tw`hover:border-blue-800`,
//   variant === 'primary'
//     ? tw`bg-green ml-2 `
//     : tw`rounded-full p-2 bg-green-light mr-2`,
//   variant === 'secondary' && tw`my-2`,
// ]);

const socialNetworks = ({ twitter, facebook, instagram, youtube }) => {
  const items = [];
  if (twitter) {
    items.push({
      id: 1,
      name: 'twitter',
      icon: <AiOutlineTwitter />,
      link: twitter,
    });
  }
  if (facebook) {
    items.push({
      id: 2,
      name: 'facebook',
      icon: <BsFacebook />,
      link: facebook,
    });
  }
  if (instagram) {
    items.push({
      id: 3,
      name: 'instagram',
      icon: <AiFillInstagram />,
      link: instagram,
    });
  }
  if (youtube) {
    items.push({
      id: 4,
      name: 'youtube',
      icon: <FaYoutube />,
      link: youtube,
    });
  }
  return items;
};

const SocialIcons = ({ variant, ...props }) => {
  const { sanityGlobals: data } = useStaticQuery(query);

  return (
    <Container {...props}>
      {socialNetworks({
        twitter: data.twitter,
        facebook: data.facebook,
        instagram: data.instagram,
        youtube: data.youtube,
      }).map(item => (
        <IconWrapper key={item.id} type={item.name} variant={variant}>
          <a
            href={item.link}
            tw="cursor-pointer text-xl relative text-white"
            target="_blank"
            rel="noreferrer"
          >
            <span> {item.icon}</span>
          </a>
        </IconWrapper>
      ))}
    </Container>
  );
};

export default SocialIcons;
