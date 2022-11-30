import axios from "axios";
// let dateNow = new Date();
// let dateNowConvert = dateNow.toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
export const todosModule = {
    state: () => ({
        todos: [],
        page: 1,
        limit: 20,
        totalPages: 0,
        isTodosLoading: false,
        searchQuery: '',
        dateNow: ''
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
        setCompletedToAllTodo(state) {
            state.todos.map(obj => {
                obj.completed = true
            })
        },
        setUncompletedToAllTodo(state) {
            state.todos.map(obj => {
                obj.completed = false
            })
        },
        removeTodo(state, id) {
            const index = state.todos.findIndex(todo => todo.id === id)
            state.todos.splice(index, 1)
        },
        addTodo(state, todo) {
            state.todos.unshift(todo);
        },
        setTitle(state, tusk) {
            const index = state.todos.findIndex(todo => todo.id === tusk.id);
            state.todos[index].title = tusk.title
        },
        setReminder(state, tusk) {
            const index = [...state.todos].findIndex(todo => todo.id === tusk.id);
            [...state.todos][index].reminder = tusk.reminder;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setDateNow(state, date) {
            state.dateNow = date
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
        },
    },
    getters: {
      searchedTodos(state) {
          return [...state.todos].filter(todo => todo.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
      },
    },
    namespaced: true
}