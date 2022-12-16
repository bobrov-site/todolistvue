export const userModule = {
    state: () => ({
        id: 0,
        name: '',
        email: '',
        avatar: '',
        isLogin: false,
    }),
    mutations: {
        logInUser(state, [email, name, id, isLogin]) {
            state.email = email
            state.name = name;
            state.id = id
            state.isLogin = isLogin
        },
        logOutUser(state) {
            state.id = 0;
            state.name = '';
            state.email = '';
            state.isLogin = false
        },
        updateUserName(state, name) {
            state.name = name
        },
        updateUserEmail(state, email) {
            state.email = email
        }
    },
    actions: {

    },
    getters: {
        getUserName(state) {
            return state.name
        },
        getUserEmail(state) {
            return state.email
        }
    },
    namespaced: true
}