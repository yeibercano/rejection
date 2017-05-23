import { auth, googleAuthProvider } from '../../storage/firebase';

const Signin = () => {
  return (
      <aside>
          <button className="signin" onClick={() => auth.signInWithPopup(googleAuthProvider) }>
            Sign In
          </button>
      </aside>
  );
}

export default Signin
