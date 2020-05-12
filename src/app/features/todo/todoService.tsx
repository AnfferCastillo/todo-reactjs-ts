const BASE_TODO_API = 'https://jsonplaceholder.typicode.com';

export const fetchTodos =  () => {
    return fetch(`${BASE_TODO_API}/todos`)
     .then(res => res.json())
     .then(todos => todos.slice(0,10));
 }
 