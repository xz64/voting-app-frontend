import React from 'react';
import ButtonContainer from '../components/forms/ButtonContainer.jsx';
import { Link } from 'react-router';

const Home = () => (
  <div>
    Welcome to Home!
    <ButtonContainer/>
    Click <Link to='/about'>here</Link> to learn more!
  </div>
);

export default Home;
