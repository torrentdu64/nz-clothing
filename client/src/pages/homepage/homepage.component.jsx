import React , { Profiler } from 'react';

// import './homepage.styles.scss';


import Directory from '../../components/directory/directory.component'

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <Profiler id="directory" onRender={(id, phase , actualDuration) => {
      console.log({id, phase , actualDuration})
    } }>
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;