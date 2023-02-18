 import jwt_decode from "jwt-decode";

class AuthService {
    getProfile() {
        if(this.loggedIn()){
            return jwt_decode(this.getToken());
        }
        return false;
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = jwt_decode(token);
            if(decoded. exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch(err) {
            return false;
        }
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');

        window.location.assign('/');
    }
}

export default new AuthService();