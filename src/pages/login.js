import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

  if (gUser) {
    console.log(gUser);
  }
  if (gLoading) {
    return <p>loading</p>;
  }
  if (gError) {
    console.log(gError);
  }

  return (
    <section>
      <div className="mt-4  w-50 mx-auto rounded bg-light">
        <h1 className="text-center pt-4 text-success">
          Login into workout-world
        </h1>
        <form class="p-4 ">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline-success d-block mx-auto w-50 my-2"
          >
            Continue with google
          </button>
          <button className="btn btn-outline-success d-block mx-auto w-50 my-2">
            Continue with github
          </button>

          <hr />

          <div>
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div>
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <input
            type="submit"
            class="btn btn-outline-primary d-block mx-auto w-50 mt-3"
            value="Sign in"
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Login;
