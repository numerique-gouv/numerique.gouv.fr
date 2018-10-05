import GitHub from 'github-api';

module.exports = class Git {
  constructor(token) {
    this.token = token;
  };
  get_auth() {
    return new GitHub({
      token: 'MY_OAUTH_TOKEN'
    });
  }
  createPullRequest() {
  }
  mergePullRequest() {
    
  }
};
