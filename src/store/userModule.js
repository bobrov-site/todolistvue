export const userModule = {
    state: () => ({
        id: 0,
        name: '',
        email: '',
        isLogin: false,
    }),
    mutations: {
        logInUser(state, [email, name, id, isLogin]) {
            state.email = email
            state.name = name;
            state.id = id
            state.isLogin = isLogin
        },
        logOutUser(state, isLogin) {
            state.id = 0;
            state.name = '';
            state.email = '';
            state.isLogin = isLogin
        }
    },
    actions: {

    },
    getters: {

    },
    namespaced: true
}