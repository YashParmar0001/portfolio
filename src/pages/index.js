import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Featured, Projects, Contact } from '@components';
import { Toaster } from 'react-hot-toast';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: '#0C1B31',
              color: 'white',
            },
            iconTheme: {
              primary: '',
              secondary: 'green',
            },
          },
        }}
        containerStyle={{
          top: 20,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
      <Hero />
      <About />
      {/* <Jobs /> */}
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
