import React from 'react';
import '@styles/NotFound.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
const NotFound = () => (
  <div className="not-found-container">
    <div className="not-found">
      <h1>404</h1>
      <h3>Өкінішке орай, Робот хомяктары бұл бетті әлі жасаған жоқ</h3>
      <div className="left">
          <RaisedButton
            containerElement={<Link to="/" />}
            className="btn"
            label="Өркениетке оралу"
            labelPosition="after"
            secondary={true}
            icon={<KeyboardArrowLeft />}
          />
        </div>
    </div>
  </div>
);

export default NotFound;
