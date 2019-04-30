import React, { Component } from "react";
import "./App.css";
import Alert from "./components/notifications";
import Photo from "./components/photos";
import Call from "./components/calls";
import Battery from "./components/battery";

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="." className="navbar-brand">
            Alert-App
          </a>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="head">
                <h2>Bildirimler</h2>
              </div>
              <div className="content">
                <Alert />
              </div>
            </div>
            <div className="col-md-3">
              <div className="head">
                <h2>Fotoğraflar</h2>
              </div>
              <div className="content">
                <Photo />
              </div>
            </div>
            <div className="col-md-3">
            <div className="head">
                <h2>Aramalar</h2>
              </div>
              <div className="content">
                <Call />
              </div>
            </div>
            <div className="col-md-3">
            <div className="head">
                <h2>Pil Durumu</h2>
              </div>
              <div className="content">
                <Battery />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
