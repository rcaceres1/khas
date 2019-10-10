import React, {Component} from 'react';
import Comms from '../../components/Comms/Comms';
import { deleteComms, getComms } from '../../utils/commsService';

class CommsFrame extends Component {
    constructor(){
        super()
        this.state ={
            comms: []
        }
    }

    handleDeleteComm = (commIdx, user, _id) =>{
        const options = {
                method: 'POST',
                headers : {
                    "content-type" : "application/json"
                },
                body: JSON.stringify({commIdx: commIdx, _id: _id,user})
        }

    
        deleteComms(options).then(result=> {
          const newStateArray = this.state.comms.filter(
            (elem, idx) => idx !== result
            )
            this.setState({ comms: newStateArray })
        })
      }


    async componentDidMount(){
        const comms = await getComms(this.props.user)
        console.log(comms)
    }

    render(){

        return(
            <Comms 
                user={this.props.user} 
                comms={this.state.comms}
                handleLogout={this.props.handleLogout}
                handleDeleteComm={this.handleDeleteComm}
            />
        )

    }
}

export default CommsFrame
