import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ReactSVG from "react-svg"
import styled from '@emotion/styled';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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


const Header = ({ siteTitle, logo }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window : undefined,
  });

  return (
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
        <AppBar position={trigger ? 'fixed' : 'static'}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Tab
              component={Link}
              label="Products"
              to="/"
            />
            <Tab
              component={Link}
              label="About"
              to="/about"
            />
          </Tabs>
        </AppBar>
      </PagesMenu>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
