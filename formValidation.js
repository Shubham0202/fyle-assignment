const formInputs = document.querySelectorAll('.inp-container .inp');
const toolTip = document.querySelectorAll('.tool-tip');
const formLabels = document.querySelectorAll('.inp-container label');
const submitBtn = document.querySelector('.btn-submit');

console.log(toolTip)
// Function to show/hide tooltip based on input value
function toggleTooltip(input, tooltip,label) {
  if (input.value.trim() === "") {
    label.classList.add('label-bottom');
    tooltip.classList.remove('hidden'); // Add 'show' class to display tooltip
} else {
    label.classList.remove('label-bottom');
    tooltip.classList.add('hidden'); // Remove 'show' class to hide tooltip
}
setTimeout(()=>{
    label.classList.remove('label-bottom');
    tooltip.classList.add('hidden');
  },3000)
}



submitBtn.addEventListener('click', () => {
  formInputs.forEach((input, index) => {
    toggleTooltip(input, toolTip[index],formLabels[index]);
  });
});

// check email vailidity
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  const emailInput = document.querySelector('#email');
  
  emailInput.addEventListener('blur', () => {
    const email = emailInput.value;
    const isValid = isValidEmail(email);
  
    if (!isValid) {
        formLabels[0].classList.add('label-bottom');
        toolTip[0].classList.remove('hidden');
        toolTip[0].innerHTML= 'Invalid Email';
    }
    else
    {
        formLabels[0].classList.remove('label-bottom');
        toolTip[0].classList.add('hidden');
        toolTip[0].innerHTML= 'Email is required';
    }
    setTimeout(()=>{
        formLabels[0].classList.remove('label-bottom');
        toolTip[0].classList.add('hidden');
        toolTip[0].innerHTML= 'Email is required';
    },3000)
  });
  