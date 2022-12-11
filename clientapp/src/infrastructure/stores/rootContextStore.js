import CurrentUserStore from "./currentUserStore";
import TokenStore from "./tokenStore";

const rootStore = {
  currentUserStore: new CurrentUserStore(),
  tokenStore: new TokenStore(),
};

export default rootStore;
