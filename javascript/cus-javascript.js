
var $alertDiv = document.querySelector('.alert-div');
var $closeBtn = document.querySelector('.close-btn');

function opacityNone() {
    $alertDiv.classList.add('opacity-none');
    setTimeout(function displayOff(){
        $alertDiv.classList.add('display-off');
    }, 250);
}
$closeBtn.addEventListener('click', opacityNone);
