import React,{Component} from 'react';
import createComm from '../../utils/CreateComm';
import CreateComm from '../../components/CreateComm/CreateComm'

class AddComm extends Component{

    handleAddComm = async ({username, student, rating}) => {
        const {user} = this.props
            const options = {
                method: 'POST',
                headers : {
                    "content-type" : "application/json"
                },
                body: JSON.stringify({username, student, rating, user})
            }    
           return await createComm(options)
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
                />
            </div>
        )
    }
}

export default AddComm;