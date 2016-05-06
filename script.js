$(document).ready(function(){
  $(".selector").menu({
    position: {my: "left top", at: "right-5 top+5"}
  });
  $(".selector").menu({
    role: listbox
  });
  $(".selector").menu("collapseAll", null, true);
  $(".selector").menu("expand");
});
