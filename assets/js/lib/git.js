import GitHub from 'github-api';
import {assert} from "chai";

class Git {
  constructor(token) {
    this.token = token;
  };
  get_auth() {
    return new GitHub({
      token: this.token,
    });
  }
  createAndMerge() {
    const github = this.get_auth();
    const repo = github.getRepo('dinsic-gouv', 'site-dinsic');
    let options = {
      "title": "Mise en production "+ Date.now() +"",
      "body": "Pull request créée depuis numerique.gouv.fr",
      "head": "preproduction",
      "base": "production"
    };
    repo.createPullRequest(options)
      .then((response) => {
        let pullRequestNumber = response.data.number;
        repo.mergePullRequest(pullRequestNumber)
      })
      .catch((error) => {
        alert("Il y a eu une erreur lors du déploiement, verifier qu'il est en cours : https://circleci.com/gh/dinsic-gouv/site-dinsic/tree/production")
      });
  }
}

export { Git }
