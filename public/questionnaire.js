const questionnaireCategories = document.querySelectorAll('.question-category');
const tosBtn = document.querySelector('.tos-btn');
const submitBtn = document.querySelector('#questionnaire-submit');

tosBtn.addEventListener('click', () => {
  questionnaireCategories.forEach((category) => {
    category.classList.toggle('hidden');
  })
  submitBtn.classList.toggle('hidden')
})

