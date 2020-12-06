//selector
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');


//event handlers
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
});

//functions
function checkInput()
{
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const password1value = password1.value.trim();
    const password2value = password2.value.trim();

    if(usernamevalue === '')
    {
        showError(username,"Username can't be blank");
    }
    else if(!isUsernameValid(usernamevalue))
    {
        showError(username,"Username can only contain lowercase alphabets");
    }
    else
    {
        showSuccess(username);
    }
    if(emailvalue === '')
    {
        showError(email,"Email Id can't be blank");
    }
    else if(!isEmailValid(emailvalue))
    {
        showError(email,"Email is not valid");
    }
    else
    {
        showSuccess(email);
    }
    if(password1value === '')
    {
        showError(password1,"Password can't be blank");
    }
    else{
        showSuccess(password1);
    }
    if(password2value === '')
    {
        showError(password2,"Password can't be blank");
    }
    else if(password2value != password1value)
    {
        showError(password2,"Password is not matched");
    }
    else{
        showSuccess(password2);
    }
}

function showError(input,msg)
{
    const checkValue = input.parentNode;
    checkValue.className = 'form-control error';
    const small = checkValue.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input)
{
    const checkValue = input.parentNode;
    checkValue.className = 'form-control success';
}

function isEmailValid(email)
{
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(username)
{
    return/^([a-z]+)$/.test(username);
}