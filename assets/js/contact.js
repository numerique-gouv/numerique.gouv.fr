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

  axios.post('http://localhost:3005/mail', {
    params: data
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      alert('error');
    });

  //
  //   $.ajax({
  //     url: 'http://localhost:3005/mail',
  //     type: 'POST',
  //     crossDomain: true,
  //     data: data,
  //     success:function(data) {
  //       console.log('success');
  //     },
  //     error:function(data) {
  //       console.log('error');
  //     }
  // });
});
