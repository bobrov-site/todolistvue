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
        setDefaultTodo(state, todos) {
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
      addDefaultTodos(ctx) {
          // let dateNow = new Date();
          // let dateNowConvert = dateNow.toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric'});
          const todos = [
              {
                  userId: 1,
                  id: 1,
                  title: 'Выучить новый метод в js 👌',
                  completed: false,
              },
              {
                  userId: 1,
                  id: 2,
                  title: 'Приготовить пельмени 🫕',
                  completed: true,
              },
              {
                  userId: 1,
                  id: 3,
                  title: 'Напомнить в 13:00 о футболе ⚽️',
                  completed: false,
              }
          ]
          ctx.commit('setTodos', todos)
      }
    },
    getters: {
      searchedTodos(state) {
          return [...state.todos].filter(todo => todo.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
      },
    },
    namespaced: true
}