const headerOne = document.querySelector('.header-1');
const headerTwo = document.querySelector('.header-2');
const headerThree = document.querySelector('.header-3');
const headerFour = document.querySelector('.header-4');
const headerFive = document.querySelector('.header-5');
const headerOverview = document.querySelector('.header-overview');
const headerBodyart = document.querySelector('.header-bodyart');
const headerCareer = document.querySelector('.header-career');
const headerPersonality = document.querySelector('.header-personality');
const headerLookingFor = document.querySelector('.header-lookingfor');
const headerBtns = document.getElementsByClassName('.header-btn');


headerOne.addEventListener('click', () => {
	headerTwo.classList.remove('active');
	headerThree.classList.remove('active');
	headerFour.classList.remove('active');
	headerFive.classList.remove('active');
	headerOne.classList.add('active');
	headerOverview.classList = 'profile-overview-text header-overview';
	headerPersonality.classList = 'profile-overview-text hidden header-personality';
	headerCareer.classList = 'profile-overview-text hidden header-career';
	headerBodyart.classList = 'profile-overview-text hidden header-bodyart';
	headerLookingFor.classList = 'profile-overview-text hidden header-lookingfor';
})
headerTwo.addEventListener('click', () => {
	headerOne.classList.remove('active');
	headerThree.classList.remove('active');
	headerFour.classList.remove('active');
	headerFive.classList.remove('active');
	headerTwo.classList.add('active');
	headerOverview.classList = 'profile-overview-text hidden header-overview';
	headerPersonality.classList = 'profile-overview-text header-personality';
	headerCareer.classList = 'profile-overview-text hidden header-career';
	headerBodyart.classList = 'profile-overview-text hidden header-bodyart';
	headerLookingFor.classList = 'profile-overview-text hidden header-lookingfor';

})
headerThree.addEventListener('click', () => {
	headerOne.classList.remove('active');
	headerTwo.classList.remove('active');
	headerFour.classList.remove('active');
	headerFive.classList.remove('active');
	headerThree.classList.add('active');
	headerOverview.classList = 'profile-overview-text hidden header-overview';
	headerPersonality.classList = 'profile-overview-text hidden header-personality';
	headerCareer.classList = 'profile-overview-text header-career';
	headerBodyart.classList = 'profile-overview-text hidden header-bodyart';
	headerLookingFor.classList = 'profile-overview-text hidden header-lookingfor';

})
headerFour.addEventListener('click', () => {
	headerOne.classList.remove('active');
	headerThree.classList.remove('active');
	headerTwo.classList.remove('active');
	headerFive.classList.remove('active');
	headerFour.classList.add('active');
	headerOverview.classList = 'profile-overview-text hidden header-overview';
	headerPersonality.classList = 'profile-overview-text hidden header-personality';
	headerCareer.classList = 'profile-overview-text hidden header-career';
	headerBodyart.classList = 'profile-overview-text header-bodyart';
	headerLookingFor.classList = 'profile-overview-text hidden header-lookingfor';

})
headerFive.addEventListener('click', () => {
	headerOne.classList.remove('active');
	headerThree.classList.remove('active');
	headerTwo.classList.remove('active');
	headerFour.classList.remove('active');
	headerFive.classList.add('active');
	headerOverview.classList = 'profile-overview-text hidden header-overview';
	headerPersonality.classList = 'profile-overview-text hidden header-personality';
	headerCareer.classList = 'profile-overview-text hidden header-career';
	headerBodyart.classList = 'profile-overview-text hidden header-bodyart';
	headerLookingFor.classList = 'profile-overview-text  header-lookingfor';

})


