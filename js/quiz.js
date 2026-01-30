document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    {
      q: 'Quelle est la balise pour un paragraphe en HTML ?',
      choices: ['<div>', '<p>', '<span>', '<header>'],
      a: 1
    },
    {
      q: 'Quelle propriété CSS change la couleur du texte ?',
      choices: ['background-color', 'color', 'font-style', 'border-color'],
      a: 1
    },
    {
      q: 'Quel mot-clé sert à déclarer une constante en JavaScript ?',
      choices: ['let', 'var', 'const', 'static'],
      a: 2
    }
  ];

  let current = 0;
  let score = 0;

  const totalEl = document.getElementById('total');
  const currentEl = document.getElementById('current');
  const questionEl = document.getElementById('question');
  const choicesEl = document.getElementById('choices');
  const resultEl = document.getElementById('result');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');

  totalEl.textContent = questions.length;

  function renderQuestion(){
    const q = questions[current];
    currentEl.textContent = current + 1;
    questionEl.textContent = q.q;
    choicesEl.innerHTML = '';
    resultEl.innerHTML = '';
    nextBtn.disabled = true;

    q.choices.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-outline-light';
      btn.style.textAlign = 'left';
      btn.textContent = c;
      btn.addEventListener('click', () => selectChoice(i, btn));
      choicesEl.appendChild(btn);
    });
  }

  function selectChoice(index, btn){
    const q = questions[current];
    const buttons = choicesEl.querySelectorAll('button');
    buttons.forEach(b => b.disabled = true);

    if(index === q.a){
      score++;
      btn.classList.remove('btn-outline-light');
      btn.classList.add('btn-success');
      resultEl.innerHTML = '<div class="text-success">Bonne réponse !</div>';
    } else {
      btn.classList.remove('btn-outline-light');
      btn.classList.add('btn-danger');
      const correctBtn = buttons[q.a];
      correctBtn.classList.remove('btn-outline-light');
      correctBtn.classList.add('btn-success');
      resultEl.innerHTML = '<div class="text-danger">Mauvaise réponse.</div>';
    }

    if(current < questions.length -1){
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
      finishQuiz();
    }
  }

  function finishQuiz(){
    resultEl.innerHTML += `<div class="mt-3">Score: <strong>${score}/${questions.length}</strong></div>`;
    restartBtn.style.display = 'inline-block';
  }

  nextBtn.addEventListener('click', () => {
    current++;
    if(current < questions.length) renderQuestion();
    if(current === questions.length -1) nextBtn.disabled = true;
  });

  restartBtn.addEventListener('click', () => {
    current = 0; score = 0; restartBtn.style.display = 'none'; renderQuestion();
  });

  renderQuestion();
});