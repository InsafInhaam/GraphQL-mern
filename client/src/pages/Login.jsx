import React from "react";

const Login = () => {
  return (
    <>
      <div className="container login-form">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <h3 className="text-center">PMS LOGIN</h3>
            <form>
              <div className="form-group mt-3">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
