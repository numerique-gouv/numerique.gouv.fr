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
    const repo = github.getRepo('MatthiasFeraga', 'site-dinsic');
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
        alert("Il y a eu une erreur lors du déploiement : " + error.message);
      });
  }
}

export { Git }
