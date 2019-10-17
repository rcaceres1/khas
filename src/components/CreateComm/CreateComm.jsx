import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./CreateComm.module.css";

class CreateComm extends Component {
  state = {
    username: "",
    date: new Date(),
    student: "",
    rating: "Great!",
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
                <option value="Great!">Great!</option>
                <option value="So-So">So-So</option>
                <option value="Sad">Sad</option>
                <option value="I felt sick...">I felt sick...</option>
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
                <option value="all of my food">All of my food!</option>
                <option value="some">some food..</option>
                <option value="very little">Very little..</option>
                <option value="none">None </option>
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
                <option value="Math">Math</option>
                <option value="Scienc">Science</option>
                <option value="Circle Time">Circle Time</option>
                <option value="PE">PE</option>
                <option value="Music">Music</option>
                <option value="Recess">Recess</option>
                <option value="Speech">Speech</option>
                <option value="Cooking">Cooking</option>
                <option value="Art">Art</option>
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
