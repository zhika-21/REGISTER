const reg = document.querySelector("#tabreg")
const formReg = document.querySelector("#reg")
const sign = document.querySelector("#tabsign")
const formSign = document.querySelector("#sign")

//переключение на tabform registration/sign in
reg.addEventListener("click", () => {
    if(formReg.style.display ="none"){
        formReg.style.display ="block"
        formSign.style.display ="none"
    } 
})
sign.addEventListener("click", () => {
    if(formSign.style.display ="none"){
        formSign.style.display ="block"
        formReg.style.dicplay ="none"
    }
 });


/*  formReg.form.addEventListener("submit", (e) => {

    }); */

/* let logpw ={
    user =[]
} */

//функция для проверки ввода пароля и сохранения в localstorage
function store(){

    let name = document.getElementById('name');
    let pw = document.getElementById('pw');
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');
        
    }else if(pw.value.length == 0){
        alert('Please fill in password');
        
    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');
        
    }else if(pw.value.length > 8){
        alert('Max of 8');
        
    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');
        
    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');
        
    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');
        
    }else{
        //если все правильно введено - сохраняем в localstorage
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('user', user.value);
        localStorage['localCart'] = JSON.stringify(user.value);
        //alert('Your account has been created');
        window.open('/animation.html');
    }
}

//sign in
function check(){
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');
    let userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        //alert('You are logged in.');
        window.open('/animation.html','_blank');
    }else{
        alert('Error on login');
    }
}

//показать / скрыть пароль на вкладке - регистрации
function show_hide_password(target){
	let input = document.getElementById('pw');
    let view = document.querySelector('.fa-eye')
    let noview =document.querySelector('.fa-eye-slash')
	if (input.getAttribute('type') === 'password') {
		view.style.display = 'none';
        noview.style.display = 'inline-block';
		input.setAttribute('type', 'text');
	} else {
		view.style.display = 'inline-block';
        noview.style.display = 'none';
		input.setAttribute('type', 'password');
	}
	return false;
}
//показать / скрыть пароль на вкладке - вход
function show_hide_password_sign(target){
	let input = document.getElementById('userPw');
    let view2 = document.querySelector('.fa-eye')
    let noview2 =document.querySelector('.fa-eye-slash')
	if (input.getAttribute('type') === 'password') {
		view2.style.display = 'none';
        noview2.style.display = 'inline-block';
		input.setAttribute('type', 'text');
	} else {
		view2.style.display = 'inline-block';
        noview2.style.display = 'none';
		input.setAttribute('type', 'password');
	}
	return false;
}

