"use strict";

let ipsumList = [
  "aboot",
  "Alberta",
  "all-dressed chips",
  "Anne of Green Gables",
  "bachelor apartment",
  "back bacon",
  "beauty",
  "beaver",
  "beavertail",
  "beer",
  "beer store",
  "brews",
  "brewski",
  "British Columbia",
  "brown bread",
  "Bryan Adams",
  "butter tart",
  "caesar",
  "Canada",
  "Canada Day",
  "Canadian Tire money",
  "canoe",
  "Canuck",
  "CBC",
  "Celine Dion",
  "chesterfield",
  "chinook",
  "chip truck",
  "chocolate bar",
  "CN Tower",
  "Coffee Crisp",
  "coffee whitener",
  "colour",
  "cottage country",
  "cribbage",
  "Crispy Crunch",
  "crokinole",
  "curling",
  "Degrassi",
  "deke",
  "donair",
  "double-double",
  "eavestrough",
  "eh",
  "fire hall",
  "forty-pounder",
  "franglais",
  "freezies",
  "garburator",
  "gasbar",
  "Girl Guides",
  "gitch",
  "give'r",
  "gotch",
  "Great Lakes",
  "Group of Seven",
  "head'r",
  "health care",
  "Heritage Minute",
  "hockey",
  "homo milk",
  "hooped",
  "hoser",
  "housecoat",
  "humidex",
  "hydro bill",
  "igloo",
  "Justin Bieber",
  "keener",
  "kerfuffle",
  "ketchup chips",
  "Kids in the Hall",
  "kilometres",
  "Kinder Surprise",
  "knapsack",
  "Kodiak",
  "Kraft Dinner",
  "lacrosse",
  "LCBO",
  "Log Driver's Waltz",
  "loonie",
  "lumberjack",
  "Manitoba",
  "maple leaf",
  "maple syrup",
  "Margaret Atwood",
  "Maritimes",
  "maternity leave",
  "metric system",
  "mickey",
  "Mike Myers",
  "milk in a bag",
  "Molson Canadian",
  "moose",
  "Mountie",
  "Muskoka chair",
  "nanaimo bar",
  "New Brunswick",
  "Newfie",
  "Newfoundland",
  "NFB",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "O Canada",
  "Ontario",
  "Ottawa",
  "our home and native land",
  "pablum",
  "parkade",
  "pencil crayon",
  "Peter Mansbridge",
  "plaid",
  "postal code",
  "poutine",
  "Prairies",
  "Prime Minister",
  "Prince Edward Island",
  "processed cheese",
  "province",
  "public school",
  "Quebec",
  "Rick Mercer",
  "Robertson screwdriver",
  "runners",
  "rye & ginger",
  "Saskatchewan",
  "Second City",
  "serviette",
  "sixty-pounder",
  "Smarties",
  "snow",
  "snowbird",
  "snowmobile",
  "sorry buddy",
  "stagette",
  "sugar shack",
  "supply teacher",
  "take off",
  "Texas mickey",
  "Timbit",
  "Timmies",
  "Tommy Douglas",
  "toque",
  "tortiere",
  "track pants",
  "Trans-Canada",
  "Trudeau",
  "true north strong and free",
  "turfed",
  "twenty-sixer",
  "two-four",
  "twoonie",
  "washroom",
  "way she goes",
  "Wayne Gretzky",
  "we the north",
  "wicket",
  "Yukon Territory",
  "zamboni",
  "zed",
  "49th parallel",
  "5-pin bowling"
];

let ipsumApp = {};

let clipboard = new Clipboard(".copyButton");
clipboard.on('success', function (e) {
	console.log(e);
});
clipboard.on('error', function (e) {
	console.log(e);
});

// create empty array for new words
let newRandomArray = [];

// create empty array for new sentences
let combinedSentences = [];

// create a variable that returns 5 words
// and push these words onto newRandomArray
let generateRandomWords = function generateRandomWords() {
	for (let i = 0; i < 5; i = i + 1) {
		// generate a random number
		let randomNumber = Math.floor(Math.random() * ipsumList.length);
		let randomWord = ipsumList[randomNumber];
		// add that word to new empty array called newRandomArray
		newRandomArray.push(randomWord);
	}
	let sentence = newRandomArray.splice(0);
	let joinedSentence = sentence.join(" ");
	// capitalize first letter and add period and eh to end
	let uppercaseFirstLetter = joinedSentence.charAt(0).toUpperCase();
	let stringWithoutFirstLetter = joinedSentence.slice(1);
	let capitalizeFirstLetter = function capitalizeFirstLetter() {
		return uppercaseFirstLetter + stringWithoutFirstLetter + ", eh. ";
	};
	let finalSentence = capitalizeFirstLetter();
	combinedSentences.push(finalSentence);
};

let shortParagraph = function shortParagraph() {
	combinedSentences = [];
	for (let i = 0; i < 4; i = i + 1) {
		generateRandomWords();
	}
	let finalShort = combinedSentences.join(" ");
	document.querySelector("section.displayIpsum").innerHTML = "<div class=\"completeParagraph\"><p id=\"displayParagraph\"> " + finalShort + " </p></div>";
};

let mediumParagraph = function mediumParagraph() {
	combinedSentences = [];
	for (let i = 0; i < 8; i = i + 1) {
		generateRandomWords();
	}
	let finalMedium = combinedSentences.join(" ");
	document.querySelector("section.displayIpsum").innerHTML = "<div class=\"completeParagraph\"><p> " + finalMedium + " </p></div>";
};

let longParagraph = function longParagraph() {
	combinedSentences = [];
	for (let i = 0; i < 12; i = i + 1) {
		generateRandomWords();
	}
	let finalLong = combinedSentences.join(" ");
	document.querySelector("section.displayIpsum").innerHTML = "<div class=\"completeParagraph\"><p> " + finalLong + " </p></div>";
};

let showFinalText = function showFinalText() {
	document.querySelectorAll(".resetButton").forEach(function(element) {
		element.classList.remove("hidden");
	});
	document.querySelectorAll(".copyButton").forEach(function(element) {
		element.classList.remove("hidden");
  });
	// Add expanded class to section__wrapper
	const wrapper = document.querySelector(".section__wrapper");
	if (wrapper) {
		wrapper.classList.add("expanded");
	}
	newRandomArray = [];
};

let resetPage = function resetPage() {
	document.querySelectorAll(".resetButton").forEach(function(element) {
		element.classList.add("hidden");
	});
	document.querySelectorAll(".copyButton").forEach(function(element) {
		element.classList.add("hidden");
  });
	// Clear the displayed paragraph
	document.querySelector(".displayIpsum").innerHTML = "";
	// Remove expanded class from section__wrapper
	const wrapper = document.querySelector(".section__wrapper");
	if (wrapper) {
		wrapper.classList.remove("expanded");
	}
	newRandomArray = [];
};

// Utility to update .disabled class on .button__basic labels for Firefox
function updateButtonBasicDisabledState() {
  document.querySelectorAll('.button__basic').forEach(function(label) {
    const input = label.querySelector('input[type="radio"]');
    if (input && input.disabled) {
      label.classList.add('disabled');
    } else {
      label.classList.remove('disabled');
    }
  });
}

// click events
ipsumApp.events = function () {
  const form = document.getElementById("lengthForm");
  const radios = form.querySelectorAll('input[type="radio"]');
  const submitBtn = document.getElementById("button__submit");
  const resetBtn = document.getElementById("button__reset");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const selected = form.querySelector('input[name="length"]:checked').value;
    // Disable radios and submit
    radios.forEach(r => r.disabled = true);
    submitBtn.disabled = true;
    updateButtonBasicDisabledState();
    showFinalText();
    if (selected === "short") {
      shortParagraph();
    } else if (selected === "medium") {
      mediumParagraph();
    } else if (selected === "long") {
      longParagraph();
    }
  });

  resetBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // Enable radios and submit
    radios.forEach(r => r.disabled = false);
    submitBtn.disabled = false;
    updateButtonBasicDisabledState();
    // Reset the page as before
    resetPage();
  });

  document.querySelectorAll(".buttonText").forEach(function(element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
};

ipsumApp.init = function () {};

// document ready equivalent
document.addEventListener('DOMContentLoaded', function () {
	ipsumApp.init();
	ipsumApp.events();
	// Update .disabled class on DOMContentLoaded
	updateButtonBasicDisabledState();
});