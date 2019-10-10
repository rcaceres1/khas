import React,{Component} from 'react';
import createComm from '../../utils/CreateComm';
import CreateComm from '../../components/CreateComm/CreateComm'

class AddComm extends Component{

    handleAddComm = async (comm) => {
        const createdComm = await createComm(comm);
    }

    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h3>Add a communication for your student!</h3>
                </div>
                <CreateComm 
                    handleAddComm={this.handleAddComm}
                    history={this.props.history}
                    user={this.props.user}
                />
            </div>
        )
    }
}

export default AddComm;