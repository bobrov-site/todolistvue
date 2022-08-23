import axios from "axios";
export const todosModule = {
    state: () => ({
        todos: [],
        page: 1,
        limit: 10,
        totalPages: 0,
        isTodosLoading: false,
        searchQuery: '',
    }),
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
        },
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        setTitle(state, tusk) {
            const index = state.todos.findIndex(todo => todo.id === tusk.id);
            state.todos[index].title = tusk.title
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
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
    getters: {
      searchedTodos(state) {
          return [...state.todos].filter(todo => todo.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
      }
    },
    namespaced: true
}