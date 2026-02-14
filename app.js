// variable
const accordion = document.getElementsByClassName("content-container");

// looping through the answer
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// function for making clicked stabke
const questions = document.getElementsByClassName("question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = this.nextEleemntSibling;
    const isActive = answer.classList.contain("active");

    document.querySelectorAll(".answer").forEach((ans) => {
      ans.classList.remove("active");
      ans.style.maxHeight = null;
    });

    // Open clicked answer if it wasn't already open
    if (!isActive) {
      answer.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
