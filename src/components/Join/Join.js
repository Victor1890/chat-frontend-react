import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Victor Chat React</h1>
        <p className='heading_paragraph'>
          Favor en introducir su nombre de usuario y el ID de la sala de reunión
        </p>
        <div>
          <input
            placeholder='Nombre de Usuario'
            className='joinInput'
            type='text'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='ID de la Sala'
            className='joinInput mt-20'
            type='text'
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type='submit'>
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}
