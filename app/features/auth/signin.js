import { authUser, auth, googleAuthProvider } from '../../storage/firebase';

const Signin = () => {
  return (
    <aside className="signinComponent">
      <button className="signin" onClick={ () => authUser(auth, googleAuthProvider) }>
        Sign In
      </button>
      <style jsx>{`
        .signinComponent {
          width: auto;
        }
      `}
      </style>
    </aside>
  );
}

export default Signin
