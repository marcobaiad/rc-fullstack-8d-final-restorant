export default {
    isAuthenticated: () => {
        return localStorage.getItem('token') ? true : false
    },
    logedIn: (token, role) => {
        localStorage.setItem('token', token)
        localStorage.setItem('role', role)
    },
    logOut: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    },

    hasRole: role => {
        return localStorage.getItem('role') === role
    },



}

