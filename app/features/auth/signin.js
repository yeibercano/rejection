import React from 'react';
import { userLogginRequested } from '../../utilities/';

const Signin = () => {
  return (
    <aside className="signinComponent">
      <button className="signin" onClick={() => userLogginRequested()}>
        Sign In
      </button>
      <style jsx>
        {`
          .signinComponent {
            width: auto;
          }
        `}
      </style>
    </aside>
  );
};

export default Signin;
