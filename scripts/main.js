
// up the input labels
const inputs = document.querySelectorAll('.inp');
const labels = document.querySelectorAll('.inp-container label');
const required = document.querySelectorAll('.required');

const classActiveInput = 'active-input';
inputs.forEach((inp, i) => {
    inp.addEventListener('focus', () => {
        // add active-input to focused label
        labels[i].classList.add(classActiveInput);

    });
    // if input tag is not empty then add active-input class to that input
    inp.addEventListener('blur', () => {
        isInputClassActive(inp, i);
    });
});
// when webpage first time load
window.addEventListener('load', () => {
    inputs.forEach((inp, i) => {
        isInputClassActive(inp, i);
    })
})

// function to check input is empty or not and according to this add or remove active-input class from the label
function isInputClassActive(inp, i) {
    // i is index of the label
    if (inp.value.length != 0) {
        labels[i].classList.add(classActiveInput);
        required[i].classList.add('hidden');
        
    }
    else
    {
        labels[i].classList.remove(classActiveInput);
        required[i].classList.remove('hidden');

    }

}