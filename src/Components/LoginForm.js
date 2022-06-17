import React from "react";
import LogoNew from "../Assets/images/logoNew.png";
import "../Assets/styles/form.css";
import { FaUserAlt as IconUser } from "react-icons/fa";
import { FaEnvelope as IconMail } from "react-icons/fa";
import { FaLock as IconPassword } from "react-icons/fa";
import SvgComponent from "./SvgComponent";

const LoginForm = ({ onInputChange, viewForm }) => {
  return (
    <section className='container'>
      <section className='designView'>
        <p className='parraph'>
          Recuerda que al ser miembro tendrás{" "}
          <span className='loginSpan'> descuentos exclusivos</span> cada día.{" "}
          <span className='boldSpan'>¿Qué esperas para hacerlo?</span>
        </p>
        <SvgComponent className='loginImage' />
      </section>
      <section className='containerForm'>
        <section className='contentForm'>
          <div className='contentImage'>
            <img src={LogoNew} alt='Logo de inicio' />
          </div>
          <h1>¡Hola de nuevo!</h1>
          <p>
            Recuerda que al ser miembro tendrás descuentos exclusivos cada día.
            ¿Qué esperas para hacerlo?
          </p>
          <br />
          <div className='input'>
            <label htmlFor='' className='input-fill'>
              <input
                required
                type='text'
                name='name'
                placeholder='Name'
                onChange={onInputChange}
              />
              <IconUser id='iconUser' className='input-icon' />
            </label>
          </div>
          <div className='input'>
            <label htmlFor='' className='input-fill'>
              <input
                required
                type='email'
                name='email'
                placeholder='Email'
                onChange={onInputChange}
              />
              <IconMail id='iconMail' className='input-icon' />
            </label>
          </div>
          <div className='input'>
            <label htmlFor='' className='input-fill'>
              <input
                required
                type='password'
                name='password'
                placeholder='Contraseña'
                onChange={onInputChange}
              />
              <IconPassword id='iconPassword' className='input-icon' />
            </label>
          </div>
          <button onClick={viewForm}>Ingresar</button>
        </section>
        <footer>
          ¿Aún no tienes una cuenta? <span className='sign-up'>Regístrate</span>
        </footer>
      </section>
    </section>
  );
};
export default LoginForm;
