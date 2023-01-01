import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Profile = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />

        <div id="content">
          <Header />
          <div className="container p-5">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-6">
                <form>
                  <div className="form-group">
                    <label for="exampleInputName1">Name</label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label for="exampleInputPhone1">Phone</label>
                    <input
                      type="phone"
                      className="form-control"
                      id="exampleInputPhone1"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
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
        </div>
      </div>
    </>
  );
};

export default Profile;
