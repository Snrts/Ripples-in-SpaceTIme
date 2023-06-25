
function loadDropdown() {
    var languages = ['Dutch', 'English', 'German', 'French'];              //fetches the diseases by running the function from the queries.js
    for (const language of languages) {
        $('#dropdown').append($(document.createElement('option')).prop({
            value: language.charAt(0).toLowerCase() + language.slice(1),
            text: language
        }))
    }

    $(function () {
        var select = $("#dropdown"); 
        select.html(
          select.find("option").sort(function (x, y) {
            return $(x).text() > $(y).text() ? 1 : -1;
          })
        );
      });
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
loadDropdown(); // calls the function above when the page is loaded
//   /*______________________________________________________________________________________________________________________________________________*/
$("#submit").on("click", function () {
    var languageSelected = $("select option:selected");
    languageSelected = languageSelected.val();
    $("#iframe").attr("src", languageSelected+".pdf#toolbar=0&navpanes=0&scrollbar=hidden&zoom=98");
    });

  /*______________________________________________________________________________________________________________________________________________*/  
function changeLanguage(language) {
  $("#universe").attr("src", "posters/" + language + "universe.png");
}