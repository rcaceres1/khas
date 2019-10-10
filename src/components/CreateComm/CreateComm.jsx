import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./CreateComm.module.css";

class CreateComm extends Component {
  state = {
    username: "",
    student: "",
    rating: "1",
    date: new Date(),
    user: this.props.user ? this.props.user._id : null
  };

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    await this.props.handleAddComm(this.state);
    this.setState(
      {
        username: "",
        student: "",
        rating: "1",
        user: ""
      },
      () => this.props.history.push("/comms")
    );
  };

  render() {
    return (
      <div className={`container ${style.flex}`}>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Teacher</label>
              <input
                onChange={this.handleChange}
                name="username"
                value={this.state.username}
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Student</label>
              <input
                onChange={this.handleChange}
                name="student"
                value={this.state.student}
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label>How was your child today?</label>
              <select
                onChange={this.handleChange}
                name="rating"
                value={this.state.rating}
                className="form-control"
              >
                <option value="1">Great!</option>
                <option value="2">So-Si</option>
                <option value="3">Sad</option>
                <option value="4">I felt sick...</option>
              </select>
            </div>
          </div>
          <div>
            <input className="btn btn-info" type="submit" />
          </div>
          <Link to="/">Home Page || </Link>
          <Link to="/comms">Back to your Communication Logs</Link>
        </form>
      </div>
    );
  }
}

export default CreateComm;
