import axios from "axios";
export const todosModule = {
    state: () => ({
        todos: [],
        page: 1,
        limit: 10,
        totalPages: 0,
        isTodosLoading: false
    }),
    getters: {

    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos
        },
        setPage(state, page) {
            state.page = page
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setLoadingTodos(state, bool) {
            state.isTodosLoading = bool
        },
        setCompleted(state, completed) {
            const index = state.todos.findIndex(todo => todo.id === completed.id);
            state.todos[index].completed = completed.completed
        },
        removeTodo(state, id) {
            const index = state.todos.findIndex(todo => todo.id === id)
            state.todos.splice(index, 1)
        }
    },
    actions: {
        async fetchTodos({state, commit}) {
            try {
                commit('setLoadingTodos' , true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setTodos', response.data)
            }
            catch (e) {
                console.log(e)
            }
            finally {
                commit('setLoadingTodos', false)
            }
        }
    },
    namespaced: true
}