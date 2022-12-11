class TokenStore {
  constructor() {
    this.isLoggedIn = false;
  }

  setAccessToken(token) {
    if (token) {
      window.localStorage.setItem("jwt", token);
      this.isLoggedIn = true;
      return;
    }

    this.isLoggedIn = false;
    window.localStorage.removeItem("jwt");
  }

  getAccessToken() {
    return window.localStorage.getItem("jwt");
  }

  setLogin(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  }
}

export default TokenStore;
