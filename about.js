console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('FORM SUBMITTED!');
}

let profilePic = document.querySelector('#profile-pic')

const alertUser = () => {
	alert('GIVE USER COMPLIMENT!')
} 

profilePic.addEventListener('mouseover', alertUser);

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);