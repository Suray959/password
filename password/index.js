let input = document.querySelector('.password');
let openIcon = document.querySelector('.open');

openIcon.addEventListener('click', function(){
    if(input.type === 'password'){
        input.type = 'text';
        openIcon.src = 'open_eye.png';
    } else {
        input.type = 'password';
        openIcon.src = 'close_eye.png';
    }
});



