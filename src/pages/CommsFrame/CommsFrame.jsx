import React, { Component } from "react";
import Comms from "../../components/Comms/Comms";
import { deleteComms, getComms } from "../../utils/commsService";
import * as commsAPI from "../../utils/commsService";

class CommsFrame extends Component {
  constructor() {
    super();
    this.state = {
      comms: []
    };
  }

  // handleDeleteComm = (commIdx, user, _id) =>{
  //     const options = {
  //             method: 'POST',
  //             headers : {
  //                 "content-type" : "application/json"
  //             },
  //             body: JSON.stringify({commIdx: commIdx, _id: _id,user})
  //     }

  handleDeleteComm = async id => {
    await deleteComms(id);
    this.setState(
      state => ({
        comms: state.comms.filter(c => c._id !== id)
      }),
      () => this.props.history.push("/comms")
    );
  };

  async componentDidMount() {
    const comms = await getComms();
    this.setState({ comms });
  }
  async componentDidUdpate() {
    const comms = await getComms();
    this.setState({ comms });
  }

  render() {
    return (
      <>
        <Comms
          user={this.props.user}
          comms={this.state.comms}
          handleLogout={this.props.handleLogout}
          handleDeleteComm={this.handleDeleteComm}
        />
      </>
    );
  }
}

export default CommsFrame;
