$(function(){
  function appendUser(user){
  var html =
    `<div id="chat-group-users">
    <div class="chat-group-user clearfix" id="chat-group-user-22">
        <input name="chat_group[user_ids][]" type="hidden" value="user_id">/</input>
        <p class="chat-group-user__name">
          < echo ${user.name} >
        </p>
      </div>
    </div>`
      
  return html;
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    console.log(input);
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name: input },
      dataType: 'json'
    })
    .done(function(users) {
      console.log(users);
      $("input").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendUser("一致するユーザーは見つかりません");
      }
    })
    .fail(function() {
      alert('検索に失敗しました');
    })
  });
});


