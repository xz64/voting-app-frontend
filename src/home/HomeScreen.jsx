import React from 'react';
import { Link } from 'react-router';

import ButtonContainer from '../forms/ButtonContainer.jsx';

const HomeScreen = () => (
  <div>
    Welcome to HomeScreen!
    <ButtonContainer/>
    Click <Link to='/about'>here</Link> to learn more!
  </div>
);

export default HomeScreen;
