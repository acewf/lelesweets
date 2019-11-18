import React, { useState } from "react"
import styled from '@emotion/styled';
import PropTypes from "prop-types";

const Container = styled.footer`
  background:#000;
  color:#fff;
  min-height:60px;
  display:flex;
  flex-direction: column;
  justify-content:center;
  margin-top:20px;
`;


const Footer = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Footer.propTypes = {
  children: PropTypes.any,
}

Footer.defaultProps = {
  children: null
}

export default Footer