import React, {Component} from 'react';
import Comms from '../Comms/Comms';

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


    componentDidMount(){
        const options = {
            method: 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body: JSON.stringify(this.props.user)
        }

        getComms(options).then(results => 
            this.setState({
                comms: results
            })
        )
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



const BASE_URL='/api/comms/'
async function getComms(options){
    try{
        const fetchComms = await fetch(BASE_URL + 'all', options)
        const data = await fetchComms.json()
        return await data
    } catch(error) {
        console.log(error)
    }
}

async function deleteComms(options){
    try{
      const deletedComm = await fetch(BASE_URL + 'deleteComm', options)
      const data = await deletedComm.json()
      return await data
    } catch(error) {
      console.log(error)
    }
  }