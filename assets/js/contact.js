import axios from "axios"

$('#contact-form').submit(function(event) {
  event.preventDefault();

  const data = {
    from: $("input[name='from']").val(),
    name: $("input[name='name']").val(),
    subject: $("input[name='subject']").val(),
    category: $("select[name='category']").val(),
    text: $("textarea[name='text']").val()
  }

  axios.post('https://dev.numerique.gouv.fr/api/mail', {
    params: data
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
