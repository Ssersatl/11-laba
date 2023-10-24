$(document).ready(function () {
	const words = [
		{ word: "navigate", translation: "орієнтуватися, навігувати" },
    	{ word: "explore", translation: "досліджувати" },
    	{ word: "extraordinary", translation: "надзвичайний" },
    	{ word: "reflection", translation: "відображення" },
		{ word: "difficult", translation: "складний" },
		{ word: "technology", translation: "технологія" },
		{ word: "environment", translation: "навколишнє середовище" },
		{ word: "challenge", translation: "виклик" },
		{ word: "imagination", translation: "уява" },
		{ word: "curious", translation: "цікавий, допитливий" },
		{ word: "efficient", translation: "ефективний" },
		{ word: "global", translation: "глобальний" },
		{ word: "innovation", translation: "інновація" },
		{ word: "obstacle", translation: "перешкода" },
		{ word: "accomplish", translation: "виконати, досягти" },
		{ word: "negotiate", translation: "переговори" },
		{ word: "harmony", translation: "гармонія" },
		{ word: "intuition", translation: "інтуїція" },
		{ word: "comprehensive", translation: "загальний, комплексний" },
		{ word: "perseverance", translation: "настойчивість" },
		{ word: "precipitate", translation: "викидати, виносити" },
		{ word: "plausible", translation: "правдоподібний" }, 
		{ word: "virtuoso", translation: "віртуоз" },
   	{ word: "profound", translation: "глибокий" },
	   { word: "versatile", translation: "універсальний" }
  ];
	let currentStep = 1;
	let correctCount = 0;
	let incorrectCount = 0;
	function showFlashcard() {
		 const randomIndex = Math.floor(Math.random() * words.length);
		 const flashcard = words[randomIndex];
		 $("#flashcard").text(flashcard.word);
	}
	function resetGame() {
		 currentStep = 1;
		 correctCount = 0;
		 incorrectCount = 0;
		 $("#currentStep").text(currentStep);
		 $("#correctCount").text("Вірно: 0");
		 $("#incorrectCount").text("Невірно: 0");
	}
	function updateProgress() {
		 $("#currentStep").text(currentStep);
	}
	showFlashcard();
	$("#flashcard").click(function () {
		 const userTranslation = $("#translationInput").val().trim().toLowerCase();
		 const currentFlashcard = words.find(word => word.word === $("#flashcard").text());
		 if (userTranslation === currentFlashcard.translation.toLowerCase()) {
			  correctCount++;
			  $("#answerStatus").text("Вірно");
			  $("#incorrectCount").text("Невірно: " + incorrectCount);
			  $("#correctCount").text("Вірно: " + correctCount);
		 } else {
			  incorrectCount++;
			  $("#answerStatus").text("Не вірно");
			  $("#incorrectCount").text("Невірно: " + incorrectCount);
			  $("#correctCount").text("Вірно: " + correctCount);
		 }
		 currentStep++;
		 updateProgress();
		 $("#translationInput").val(""); 
		 if (currentStep <= 10) {
			  showFlashcard();
		 } else {
			  alert(`Ваш рівень знань мови: ${Math.round((correctCount / 10) * 100)}%`);
			  resetGame();
			  showFlashcard();
		 }
	});
	$("#prevStep").click(function () {
		 if (currentStep > 1) {
			  currentStep--;
			  updateProgress();
			  showFlashcard();
		 }
	});
	$("#nextStep").click(function () {
		 if (currentStep < 10) {
			  currentStep++;
			  updateProgress();
			  showFlashcard();
		 }
	});
});




