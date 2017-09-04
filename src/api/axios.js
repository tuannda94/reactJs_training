const apiUrl = "https://api4test.herokuapp.com/api/v1/todos";

export function getTodos(callback) {
    return axios.get(apiUrl)
                .then(response => callback(response))
                .catch(error => error);
}

export function createTodo(param, callback) {
    return axios.post(apiUrl, {name: param.name, completed: param.completed})
                .then(response => callback(response))
                .catch(error => error);
}

export function updateTodo(param, callback) {
    return axios.put(`${apiUrl}/${param.id}`, {completed: param.completed})
                .then(response => callback(response))
                .catch(error => error);
}

export function deleteTodo(id, callback) {
    return axios.delete(`${apiUrl}/${id}`)
                .then(response => callback(response))
                .catch(error => error);
}

export default {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}