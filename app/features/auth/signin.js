import { auth, googleAuthProvider } from '../../storage/firebase';

const Signin = () => {
  return (
    <aside>
        <button className="signin" onClick={() => auth.signInWithPopup(googleAuthProvider) }>
          Sign In
        </button>
        <style jsx> {`
          aside {
            width: auto;
          }
        `}</style>
    </aside>
  );
}

export default Signin
