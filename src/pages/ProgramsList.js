import React, { Component } from 'react'
import { FaRProject } from 'react-icons/fa'
import ProgramService from '../services/ProgramService'


class ProgramsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                programs: []
        }
        this.addProgram = this.addProgram.bind(this);
        this.editProgram = this.editProgram.bind(this);
        this.deleteProgram = this.deleteProgram.bind(this);
    }

    deleteProgram(trainingId){
        ProgramService.deleteProgram(trainingId).then( res => {
            this.setState({programs: this.state.programs.filter(program => program.trainingId !== trainingId)});
        });
    }
    viewProgram(trainingId){
        this.props.history.push(`/view-program/${trainingId}`);
    }
    editProgram(trainingId){
        this.props.history.push(`/add-program/${trainingId}`);
    }

    componentDidMount(){
        ProgramService.showAllPrograms().then((res) => {
            this.setState({ programs: res.data});
        });
    }

    addProgram(){
       this.props.history.push('/add-program/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Programs List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProgram}> Add Program</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Program Start Date</th>
                                    <th> Program End Date</th>
                                    
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.programs.map(
                                        program => 
                                        <tr key = {program.trainingId}>
                                             <td> {program.startDate} </td>   
                                             <td> {program.endDate}</td>
                                            
                                             <td>
                                                 <button onClick={ () => this.editProgram(program.trainingId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProgram(program.trainingId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProgram(program.trainingId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ProgramsList
