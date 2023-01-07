class TokenStore {
  setAccessToken(token) {
    if (token) {
      window.localStorage.setItem("jwt", token);
      return;
    }

    window.localStorage.removeItem("jwt");
  }

  getAccessToken() {
    return window.localStorage.getItem("jwt");
  }
}

export default TokenStore;
