import AuthUser from './AuthUser/AuthUser';

const useLogout = (token) => {
    const { logout } = AuthUser();
    if (!token) {
        logout();
    }
    return;
};

export default useLogout;