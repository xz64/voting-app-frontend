import React from 'react';
import { Link } from 'react-router';

import LoginForm from './LoginForm.jsx';

const handleSubmit = (data) => {
  Function.prototype(data);
};

const About = () => (
  <div>
    Welcome to About!
    <Link to='/'>Go home</Link>
    <LoginForm onSubmit={handleSubmit}/>
  </div>
);

export default About;
