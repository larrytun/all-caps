$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    alert($("input#personName").val().toUpperCase());
    event.preventDefault();
  })
})
