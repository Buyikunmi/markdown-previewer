const smTxt =
  "# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n ```javascript\n alert(s)\n```\n <http://www.google.com/>\n >some Blockquote\n \n  ![myimage](https://s3-us-west-2.amazonaws.com/s.cdpn.io/1275455/profile/profile-80.jpg?100000)";

$(document).ready(function () {
  $("#editor").val(smTxt);
  var input = $("#editor").val();
  $("#preview").html(marked(input));
  $("#editor").keyup(function () {
    var input = $("#editor").val();
    $("#preview").html(marked(input));
  });
});
