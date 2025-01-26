function loginswitch(){
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
}
function signupswitch(){
    document.getElementById('signup-form').style.display = 'flex';
    document.getElementById('login-form').style.display = 'none';
}
function closeBtn(){
    document.getElementById('popup-container').style.display = 'none'; 
    window.open('index.html', '_self');
}

