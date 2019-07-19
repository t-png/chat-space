$(function(){
  function buildHTML(message){
    console.log(message)
    var html = 
    `<div class="message">
    <div class="upper-message">
      <div class="upper-message__user-name">
        "${message.user_name}"
      </div>
      <div class="upper-message__date">
        ${message.date}
      </div>
    </div>
    <div class="lower-message">
        <p class="lower-message__content">
          ${message.text}
        </p>
        
    </div>
  </div>`
  
                // `<p>
                //   <strong>
                //     <a href=/users/${message.user_id}>${message.user_name}</a>
                   
                //   </strong>
                  
                //   \n${message.date}
                //   </strong>
                //   ${message.text}
                  
                // </p>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    console.log(this);
    console.log(url);
    // var href = window.location.href + '/messages'
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data);
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.textbox').val('');
    })
    .fail(function(){
      alert('error');
    })
  })
});

//   $('.js-form').on('submit', function(e) {
//     e.preventDefault();
//     var textField = $('.js-form__text-field');
//     var todo = textField.val();
//     $.ajax({
//       type: 'POST',
//       url: '/todos.json',
//       data: {
//         todo: {
//           content: todo
//         }
//       },
//       dataType: 'json'
//     })
//     .done(function(data) {
//       var html = buildHTML(data);
//       $('.todos').append(html);
//       textField.val('');
//     })
//     .fail(function() {
//       alert('error');
//     });
//   });
// });