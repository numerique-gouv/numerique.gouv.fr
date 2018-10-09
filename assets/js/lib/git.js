import GitHub from 'github-api';
import {assert} from "chai";

class Git {
  constructor(token) {
    this.token = token;
    console.log('token =>' + this.token)
  };
  get_auth() {
    return new GitHub({
      token: this.token,
    });
  }
  createAndMerge() {
    const github = this.get_auth();
    console.log('github =>' + github);
    const repo = github.getRepo('MatthiasFeraga', 'site-dinsic');
    console.log('repo => ' + repo);
    let options = {
      "title": "Mise en production "+ Date.now() +"",
      "body": "Pull request créée depuis numerique.gouv.fr",
      "head": "preproduction",
      "base": "production"
    };
    repo.createPullRequest(options)
      .then((response) => {
        let pullRequestNumber = response.data.number;
        console.log("pull request numero " + pullRequestNumber)
        // repo.mergePullRequest(pullRequestNumber)
      })
      .catch(() => {
        alert("Il y a eu une erreur lors du déploiement");
      });
  }
}

export { Git }
