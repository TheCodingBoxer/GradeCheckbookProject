class CurrentUserStore {
  constructor() {
    this.displayName = "";
    this.userName = "";
  }

  setCurrentUser(displayName, userName) {
    this.displayName = displayName;
    this.userName = userName;
  }
}

export default CurrentUserStore;
