import React from 'react';
import './element.styles.scss';

const Element = ({ name, description }) => (
    <div className="element">
      <h2 className="title">{name.toUpperCase()}</h2>
      <p>{description}</p>
    </div>
);

export default Element;