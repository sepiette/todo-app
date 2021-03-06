import axios from 'axios';

const TODO_URL = 'http://localhost:8000/api/todos/';
export function getTodos() {
    return axios.get(TODO_URL).then(resp => {
        return resp.data;
    });
};

export function createTodo(data) {
    return axios.post(TODO_URL, data).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.error(err);
    })
}

export function deleteTodo(id) {
    return axios.delete(`${TODO_URL}${id}`).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.error(err);
    })
}

export function updateTodo(todo) {
    return axios.put(`${TODO_URL}${todo.id}/`, todo).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.error(err);
    })
}