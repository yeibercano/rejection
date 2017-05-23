import { auth, googleAuthProvider } from '../../storage/firebase';

const Signin = () => {
  return (
    <aside className="signinComponent">
      <button className="signin" onClick={() => auth.signInWithPopup(googleAuthProvider) }>
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
