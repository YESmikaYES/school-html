import React from "react";
import { Link } from 'react-router-dom';
import './TopMenu.css';
export default () => (
  <div>
    <Link to={'/'}>Homepage</Link>
    <Link to={'/pics'}>Picture Page</Link>
    <Link to={'/table'}>Table Page</Link>
  </div>
);
