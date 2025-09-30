// quiz.js

function sampleArray(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

let quizData = {};

function drawQuiz() {
  quizData.mc = sampleArray(mcBank, 50);
  quizData.essay = sampleArray(essayBank, 2);

  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  // MC
  const mcSection = document.createElement("div");
  mcSection.innerHTML = "<h2>Part I: Multiple Choice</h2>";
  quizData.mc.forEach((q, i) => {
    const qDiv = document.createElement("div");
    qDiv.innerHTML = `<p>${i + 1}. ${q.q}</p>`;
    q.choices.forEach((choice, j) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="mc${i}" value="${j}"> ${choice}`;
      qDiv.appendChild(label);
      qDiv.appendChild(document.createElement("br"));
    });
    mcSection.appendChild(qDiv);
  });
  quizDiv.appendChild(mcSection);

  // Essay
  const essaySection = document.createElement("div");
  essaySection.innerHTML = "<h2>Part III: Essay (choose one)</h2>";
  quizData.essay.forEach((q, i) => {
    essaySection.innerHTML += `<p><strong>Option ${i + 1}:</strong> ${q.q}</p>`;
  });
  essaySection.innerHTML += `<textarea rows="10" cols="100" placeholder="Write essay here..."></textarea>`;
  quizDiv.appendChild(essaySection);
}

function gradeMC() {
  let correct = 0;
  quizData.mc.forEach((q, i) => {
    const selected = document.querySelector(`input[name="mc${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) correct++;
  });
  alert(`You got ${correct} out of ${quizData.mc.length} correct.`);
}

function exportJSON() {
  const answers = {
    mc: quizData.mc.map((q, i) => {
      const selected = document.querySelector(`input[name="mc${i}"]:checked`);
      return {
        id: q.id,
        question: q.q,
        answer: selected ? parseInt(selected.value) : null,
        correct: q.answer
      };
    }),
    short: quizData.short.map((q, i) => {
      const text = document.querySelectorAll("textarea")[i].value;
      return { id: q.id, question: q.q, answer: text };
    }),
    essay: {
      options: quizData.essay.map(e => e.q),
      response: document.querySelectorAll("textarea")[quizData.short.length].value
    }
  };
  console.log(answers);
  alert("Answers exported to console.");
}
