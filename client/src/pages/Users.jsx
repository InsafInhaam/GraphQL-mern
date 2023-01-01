import React from "react";
import Clients from "../components/Clients";
import AddClientModel from "../components/AddClientModel";
import Projects from "../components/Projects";
import AddProjectModel from "../components/AddProjectModal";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Users = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <Header />
          <div className="content-wrapper">
            <div className="container">
              <div className="row ng-scope">
                <div className="col-md-12 col-md-pull-3">
                  <h4>
                    Results <span className="fw-semi-bold">Filtering</span>
                  </h4>
                  <p className="search-results-count">
                    About 94 700 000 (0.39 sec.) results
                  </p>
                  <section className="search-result-item">
                    <a className="image-link" href="#">
                      <img
                        className="image"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                    </a>
                    <div className="search-result-item-body">
                      <div className="row">
                        <div className="col-sm-9">
                          <h4 className="search-result-item-heading">
                            <a href="#">john doe</a>
                          </h4>
                          <p className="info">New York, NY 20188</p>
                          <p className="description">
                            Not just usual Metro. But something bigger. Not just
                            usual widgets, but real widgets. Not just yet
                            another admin template, but next generation admin
                            template.
                          </p>
                        </div>
                        <div className="col-sm-3 text-align-center">
                          <p className="value3 mt-sm">$9, 700</p>
                          <p className="fs-mini text-muted">PER WEEK</p>
                          <a
                            className="btn btn-primary btn-info btn-sm"
                            href="#"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="search-result-item">
                    <a className="image-link" href="#">
                      <img
                        className="image"
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      />
                    </a>
                    <div className="search-result-item-body">
                      <div className="row">
                        <div className="col-sm-9">
                          <h4 className="search-result-item-heading">
                            <a href="#">john doe</a>{" "}
                            <span className="badge bg-danger fw-normal pull-right">
                              Best Deal!
                            </span>
                          </h4>
                          <p className="info">Los Angeles, NY 20188</p>
                          <p className="description">
                            You will never know exactly how something will go
                            until you try it. You can think three hundred times
                            and still have no precise result.
                          </p>
                        </div>
                        <div className="col-sm-3 text-align-center">
                          <p className="value3 mt-sm">$10, 300</p>
                          <p className="fs-mini text-muted">PER WEEK</p>
                          <a
                            className="btn btn-primary btn-info btn-sm"
                            href="#"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="search-result-item">
                    <a className="image-link" href="#">
                      <img
                        className="image"
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      />
                    </a>
                    <div className="search-result-item-body">
                      <div className="row">
                        <div className="col-sm-9">
                          <h4 className="search-result-item-heading">
                            <a href="#">john doe</a>
                          </h4>
                          <p className="info">New York, NY 20188</p>
                          <p className="description">
                            The Great Prince of the Grand Duchy of Lithuania he
                            had stopped the invasion to Europe of Timur
                            (Tamerlan) from Asia heading a big Army of
                            Belarusians, Lithuanians.
                          </p>
                        </div>
                        <div className="col-sm-3 text-align-center">
                          <p className="value3 mt-sm">$3, 200</p>
                          <p className="fs-mini text-muted">PER WEEK</p>
                          <a className="btn btn-info btn-sm" href="#">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="search-result-item">
                    <a className="image-link" href="#">
                      <img
                        className="image"
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      />
                    </a>
                    <div className="search-result-item-body">
                      <div className="row">
                        <div className="col-sm-9">
                          <h4 className="search-result-item-heading">
                            <a href="#">john doe</a>
                          </h4>
                          <p className="info">Minsk, NY 20188</p>
                          <p className="description">
                            Yes you can! Further more, you should! It let's you
                            create really beautiful images either for elements
                            or for the entire background.
                          </p>
                        </div>
                        <div className="col-sm-3 text-align-center">
                          <p className="value3 mt-sm">$2, 400</p>
                          <p className="fs-mini text-muted">PER MONTH</p>
                          <a className="btn btn-info btn-sm" href="#">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="text-align-center">
                    <ul className="pagination pagination-sm">
                      <li className="disabled">
                        <a href="#">Prev</a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
