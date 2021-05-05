import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1>
        Aplicación de Chat en tiempo real
        <span role='img' aria-label='emoji'>
          💬
        </span>
      </h1>
      <h2>
        Trata de usarla
        <span role='img' aria-label='emoji'>
          ⬅️
        </span>
      </h2>
    </div>
    {users && (
      <div>
        <h1>Personas conectadas:</h1>
        <div className='activeContainer'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                {name}
                <img alt='Online Icon' src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    )}
  </div>
);

export default TextContainer;
