window.scroll(function () {
  if (this.scrollTop() > 100) {
    document.getElementByClassName("nav").classList.add("sticky");
  } else {
    document.getElementByClassName("nav").classList.remove("sticky");
  }
});

// Initialize and add the map
// for type and erase
// List of sentences
var _CONTENT = [
  "We Help You Grow Your Business..",
  "We Make you Awesome WebSites..",
  "We Build Softwares for your Business..",
  "Customised Solution of Everything..",
  "Come let's GRow Your Business Exponentially.."
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === _CONTENT[_PART]) {
    // Hide the cursor
    _CURSOR.style.display = "none";

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then display the first one, else move to the next
    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;

    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      _CURSOR.style.display = "inline-block";
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

//slides

$(function () {
  var $clientslider = $("#clientlogo");
  var clients = $clientslider.children().length;
  var clientwidth = clients * 220;
  $clientslider.css("width", clientwidth);
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  $(document).on(
    {
      mouseenter: function () {
        rotating = false;
      },
      mouseleave: function () {
        rotating = true;
      }
    },
    "#ourclients"
  );
  function rotateClients() {
    if (rotating != false) {
      var $first = $("#clientlogo li:first");
      $first.animate(
        {
          "margin-left": "-220px"
        },
        2000,
        function () {
          $first.remove().css({
            "margin-left": "0px"
          });
          $("#clientlogo li:last").after($first);
        }
      );
    }
  }
});
