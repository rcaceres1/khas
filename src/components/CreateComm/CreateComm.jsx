import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./CreateComm.module.css";

class CreateComm extends Component {
  state = {
    username: "",
    date: new Date(),
    student: "",
    rating: "1",
    ate: "",
    fun: "",
    need: "",
    notes: "",
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
        ate: "",
        fun: "",
        need: "",
        notes: "",
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
                <option value="2">So-So</option>
                <option value="3">Sad</option>
                <option value="4">I felt sick...</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>For lunch, I ate: </label>
              <select
                onChange={this.handleChange}
                name="ate"
                value={this.state.ate}
                className="form-control"
              >
                <option value="1">All of my food!</option>
                <option value="2">Some of food..</option>
                <option value="3">Very little..</option>
                <option value="4">None </option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>I had fun today at: </label>
              <select
                onChange={this.handleChange}
                name="fun"
                value={this.state.fun}
                className="form-control"
              >
                <option value="1">Math</option>
                <option value="2">Science</option>
                <option value="3">Circle Time</option>
                <option value="4">PE</option>
                <option value="5">Music</option>
                <option value="6">Recess</option>
                <option value="7">Speech</option>
                <option value="8">Cooking</option>
                <option value="8">Art</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>I need: </label>
              <textarea
                onChange={this.handleChange}
                name="need"
                value={this.state.need}
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Notes/Announcments:</label>
              <textarea
                onChange={this.handleChange}
                name="notes"
                value={this.state.notes}
                className="form-control"
              />
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
