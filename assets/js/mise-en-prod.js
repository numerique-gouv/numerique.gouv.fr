import { Git } from "./lib/git"

$('#button-production').click(function() {
  const git_token = $(this).data('token');
  let git = new Git(git_token);
  git.createAndMerge()
});
