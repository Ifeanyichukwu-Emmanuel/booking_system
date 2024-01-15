const reg_form = document.getElementById('reg_form');

reg_form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const fName =  reg_form.fName.value;
    const adress =  reg_form.address.value;
    const email =  reg_form.email.value;
    const phone_no =  reg_form.phone_no.value;
    const password =  reg_form.password.value;


    const fNameErr = document.querySelector('.fNameErr');
    const addressErr = document.querySelector('.email');
    const emailErr = document.querySelector('.emailErr');
    const phoneErr = document.querySelector('.phoneErr');
    const passwordErr = document.querySelector('.passwordErr');

    nameErr.innerHTML = '';
    emailErr.innerHTML = '';
    phoneErr.innerHTML = '';
    passwordErr.innerHTML = '';
    password2Err.innerHTML = '';


    const namePattern = /^[a-zA-Z\s]+$/;
    const nameReg = namePattern.test(name);
    const emailPattern = /^^[a-z0-9]([a-z0-9_\.\-])*\@(([a-z0-9])+(\-[a-z0-9]+)*\.)+([a-z0-9]{2,4})/;
    const emailReg = emailPattern.test(email);
    const phonePattern = /^[0-9]+$/;
    const phoneReg = phonePattern.test(phone);
    const passwordPattern = /^[0-9a-fA-F]{4,8}/;
    const passwordReg = passwordPattern.test(password);

    if (!nameReg) {
        nameErr.innerHTML = 'Invalid name entered';
        throw Error('Terminating')
    }
    if (!emailReg) {
        emailErr.innerHTML = 'Enter a valid email';
        throw Error('Terminating')
    }
    if (!phoneReg) {
        phoneErr.innerHTML = 'Enter a valid phone number';
        throw Error('Terminating')
    }
    if (!passwordReg) {
        passwordErr.innerHTML = 'Enter a valid password';
        throw Error('Terminating')
    }
    if (password2 === '') {
        password2Err.innerHTML = 'Comfirm password should not be empty';
        throw Error('Terminating')
    }else if(password2 !== password){
        password2Err.innerHTML = 'Password does not match';
        throw Error('Terminating')
    }

})