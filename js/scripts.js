$(document).ready(function() {
  $("#fortuneCookie").submit(function(event) {
    event.preventDefault();
    var userResponseQ1 = [];
    $("input:checkbox[name=unlucky]:checked").each(function() {
      var unlucky=$(this).val();
      userResponseQ1.push(unlucky);
    });
    var userResponseQ2=[];
    $("input:checkbox[name=lucky]:checked").each(function() {
      var lucky=$(this).val();
      userResponseQ2.push(lucky);
    });
    if(userResponseQ1.length<userResponseQ2.length) {
      $("#fortune1").show();
    }
    else {
      $("#fortune2").show();
    }
  });
});
