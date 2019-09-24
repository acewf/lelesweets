import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ReactSVG from "react-svg"
import styled from '@emotion/styled';

const Logo = styled(ReactSVG)`
  height: 100px;
  display: flex;

  & div{
    height:inherit;

    & svg{
      width:auto;
    }
  }
`;

const HeaderContainer = styled.header`
  background:black;
  margin-bottom:1.45rem;
  padding: 1.45rem 1.0876rem;
`;

const Flex = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  margin:0 0 0 10px;
  background: -webkit-linear-gradient(#ffc63b, #b66d29);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const PagesMenu = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
`;


const PageLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 20px;
`

const Header = ({ siteTitle, logo }) => (
  <HeaderContainer>
    <Flex>
      <Logo src={logo} />
      <Heading>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </Flex>
    <PagesMenu>
      <PageLink to="/">Products</PageLink>
      <PageLink to="/about">About</PageLink>
    </PagesMenu>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
