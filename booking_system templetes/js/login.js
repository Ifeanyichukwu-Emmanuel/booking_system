const login_form = document.getElementById('login_form');
login_form.addEventListener('submit', (e) =>{
    e.preventDefault();


    const email = login_form.email.value;
    const password = login_form.password.value;

    console.log(login_form.email.value)

    const emailErr = document.querySelector('.emailErr');
    const passwordErr = document.querySelector('.passwordErr')

    emailErr.innerHTML = '';
    passwordErr.innerHTML = '';

    const emailPattern = /^[a-z0-9]([a-z0-9_\.\-])*\@(([a-z0-9])+(\-[a-z0-9]+)*\.)+([a-z0-9]{2,4})/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;



    if (!emailPattern.test(email)) {
        emailErr.innerHTML = 'Enter a valid email address'
        throw Error('Terminating')
    }
    if (!passwordPattern.test(password)) {
        passwordErr.innerHTML = 'Enter a valid password'
        throw Error('Terminating')
    }
    

})
