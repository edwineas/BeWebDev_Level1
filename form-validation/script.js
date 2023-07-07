function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    if(username.value.trim() == "" || email.value.trim() == "" || password.value.trim() == "" || password2.value.trim() == "")
    {
        alert("No blank values allowed")
        return false
    }
    else
    {   if(password.value == password2.value)
        {
            return true;
        }
        else
        {
            alert("Password doesn't match")
            return false;
        }
    }
}

