import axios from "axios"

$('#contact-form').submit(function(event) {
  event.preventDefault();

  const params = {
    from: $("input[name='from']").val(),
    name: $("input[name='name']").val(),
    subject: $("input[name='subject']").val(),
    category: $("select[name='category']").val(),
    text: $("textarea[name='text']").val()
  }
  const url = window.location.host

  axios.post('https://' + url + '/api/mail', params)
    .then(function (response) {
      $('#message').removeClass('hide').addClass('green-message').html('Votre message à bien été envoyé')
      $('input').val('')
      $('textarea').val('')
    })
    .catch(function (error) {
      $('#message').removeClass('hide').addClass('red-message').html("Une erreur est survenue, votre message n'a pu être envoyé")
    });
});
