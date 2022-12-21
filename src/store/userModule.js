export const userModule = {
    state: () => ({
        id: 0,
        name: '',
        email: '',
        avatar: '',
        isLogin: false,
    }),
    mutations: {
        logInUser(state, [email, name, id, avatar, isLogin]) {
            state.email = email
            state.name = name
            state.id = id
            state.avatar = avatar
            state.isLogin = isLogin
        },
        logOutUser(state) {
            state.id = 0
            state.name = ''
            state.email = ''
            state.avatar = ''
            state.isLogin = false
        },
        updateUserName(state, name) {
            state.name = name
        },
        updateUserEmail(state, email) {
            state.email = email
        },
        updateUserAvatar(state, avatar) {
            state.avatar = avatar
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