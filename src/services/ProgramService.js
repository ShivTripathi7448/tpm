import axios from 'axios';

const PROGRAM_API_BASE_URL = "http://192.168.0.101:8008//programs";

class EmployeeService {

    showAllPrograms(){
        return axios.get(PROGRAM_API_BASE_URL);
    }

    createProgram(p){
        return axios.post(PROGRAM_API_BASE_URL, p);
    }

    viewProgram(trainingId){
        return axios.get(PROGRAM_API_BASE_URL + '/' + trainingId);
    }

    updateProgram(p){
        return axios.put(PROGRAM_API_BASE_URL + '/' + p);
    }

    deleteProgram1(p){
        return axios.delete(PROGRAM_API_BASE_URL + '/' + p);
    }
}

export default new EmployeeService()