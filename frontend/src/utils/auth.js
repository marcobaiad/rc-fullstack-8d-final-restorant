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
<<<<<<< HEAD
    hasRole: role => {
        return localStorage.getItem('role') === role
    },
    
=======
    role: role => {
        return role
    }
>>>>>>> 6518de658965166043f3d57d676f0b760e7dd63d

}

