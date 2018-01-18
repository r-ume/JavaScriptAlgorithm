var Slack = function(channel){
  this.channel = channel;
};

Slack.prototype.sendMessage = function(message){
  var url = "https://hooks.slack.com/services/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";
  var data = { "channel" : this.channel, "username" : "WASEDA TIMES", "text" : message, "icon_emoji" : " " };
  var payload = JSON.stringify(data);
  var options = {
    "method"      : "POST",
    "contentType" : "application/json",
    "payload"     : payload
  };
  UrlFetchApp.fetch(url, options);
};

function onFormSubmit(e){
  var body          = "WASEDA TIMES ";
  var itemResponse  = e.response.getItemResponses();
  var slack         = new Slack('#waseda-students');

  try {
    for (var j = 0; j < itemResponse.length; j++){
      var formData = itemResponse[j];
      var columnTitle = formData.getItem().getTitle();
      var columnResponse = formData.getResponse();

      body += "\n"　+ '【' + columnTitle + '】 : ' +  "\n" + columnResponse + "\n";
    }

    slack.sendMessage(body);
  }catch (e){
    slack.sendMessage('エラーが発生しました。' + e);
  }
}
