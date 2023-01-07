class CurrentUserStore {
  constructor() {
    this.displayName = null;
    this.userName = null;
  }

  setCurrentUser(data) {
    if (data) {
      this.displayName = data.displayName;
      this.userName = data.userName;
    } else {
      this.displayName = null;
      this.userName = null;
    }
  }
}

export default CurrentUserStore;
