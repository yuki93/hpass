function systemCopy(text) {
  var copyFrom = $('<textarea/>');
  copyFrom.text(text);
  $('body').append(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.remove();
}

$(document).ready(function(){
  // extract the current domain
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    if (tabs.length == 0) return;
    var url = tabs[0].url;
    $('#domain-input').val(tldjs.getDomain(url));
  });
  // dummy form
  $('form#dummy').submit(function(e) {
    e.preventDefault();
    var key = $('#key-input').val();
    var domain = $('#domain-input').val();
    if (key.length == 0) {
      $("#output-code > code").text('--NO KEY--');
      return
    }
    if (domain.length == 0) {
      $("#output-code > code").text('--NO DOMAIN--');
      return
    }
    var hash = CryptoJS.HmacSHA256(domain, key);
    var pass = hash.toString(CryptoJS.enc.Base64).substring(0, 16);
    $("#output-code > code").text(pass);
    systemCopy(pass);
  });
})
