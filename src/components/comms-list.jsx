import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Comm = props => (
    <tr>
        <td>{props.comm.username}</td>
        <td>{props.comm.student}</td>
        <td>{props.comm.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.comm._id}>edit</Link> | <a href="/" onClick={() => { props.deleteComm(props.comm._id) }}>delete</a>
        </td>
    </tr>
)

class CommsList extends Component {
  constructor(props) {
    super(props);

    this.deleteComm = this.deleteComm.bind(this);

    this.state = { comms: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/comms/")
      .then(response => {
        this.setState({ comms: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteComm(id) {
    axios
      .delete("http://localhost:5000/comms/" + id)
      .then(res => console.log(res.data));
    this.setState({
      comms: this.state.comms.filter(el => el._id !== id)
    });
  }

  commList() {
    return this.state.comms.map(currentcomm => {
      return (
        <Comm
          comm={currentcomm}
          deleteComm={this.deleteComm}
          key={currentcomm._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Communication Logs</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Student</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.commList()}</tbody>
        </table>
      </div>
    );
  }
}

export default CommsList;
