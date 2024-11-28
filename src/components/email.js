import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { email } from '@config';
import { Side } from '@components';
import toast from 'react-hot-toast';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }

  button {
    all: unset; /* Removes default button styles */
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    cursor: pointer;

    &:hover {
      transform: translateY(-3px);
      color: #64ffda;
    }
  }
`;

const Email = ({ isHome }) => {
  const copyToClipboard = text => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Copied');
      })
      .catch(() => {
        toast.error('Failed to copy ');
      });
  };
  return (
    <Side isHome={isHome} orientation="right">
      <StyledLinkWrapper onClick={() => copyToClipboard(email)} style={{ cursor: 'pointer' }}>
        {/* <a href="javascript:void(0);">
          {email}
        </a> */}
        <button
        // type="button"
        // style={{
        //   all: "unset",
        //   cursor: "pointer",
        //   color: "blue", // Optional: Add link-like styles
        //   textDecoration: "underline",
        // }}
        >
          {email}
        </button>
      </StyledLinkWrapper>
    </Side>
  );
};

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
