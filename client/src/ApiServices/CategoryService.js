import axios from 'axios';

const CAT_URL = 'http://localhost:8000/api/categories/';

export function getCategories() {
    return axios.get(CAT_URL).then(resp => {
        return resp.data;
    });
};

export function createCategory(data) {
    return axios.post(CAT_URL, data).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.error(err);
    })
}

export function deleteCategory(id) {
    return axios.delete(`${CAT_URL}${id}`).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.error(err);
    })
}

export function updateCategory(todo) {
    return axios.put(`${CAT_URL}${todo.id}/`, todo).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.error(err);
    })
}