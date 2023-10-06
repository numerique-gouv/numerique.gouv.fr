import axios from "axios"

$('#contact-form').submit(function(event) {
  event.preventDefault();

  const params = {
    from: $("input[name='email']").val(),
    name: $("input[name='name']").val(),
    subject: $("input[name='subject']").val(),
    category: $("select[name='category']").val(),
    text: $("textarea[name='text']").val()
  }
  const url = window.location.host

  axios.post('https://' + url + '/api/mail', params)
    .then(function (response) {
      $('input').val('')
      $('textarea').val('')
      $('#message').removeClass('hide').addClass('green-message').html('Votre message a bien été envoyé')
    })
    .catch(function (error) {
      $('#message').removeClass('hide').addClass('red-message').html("Une erreur est survenue, votre message n'a pu être envoyé")
    });
});

$("#contact-form").validate(
  {
    messages: {
      email: "Saisissez une adresse valide, par exemple : marie.dupond@domaine.com.",
      subject: "Saisissez un sujet pour votre message",
      text: "Saisissez le contenu de votre message"
    },
    errorElement: "p",
    invalidHandler: function(event, validator) {
      $('input').css('border-color', 'gray')
      $('textarea').css('border-color', 'gray')
      // 'this' refers to the form
      var errors = validator.numberOfInvalids();
      if (errors) {
        validator.errorList.forEach(function(item){
          let element = $(item.element)
          element.attr('aria-invalid', 'true')
          element.css('border-color', '#af0202')
        })
        validator.errorList[0].element.focus()
      } else {
      }
    }
  }
);
