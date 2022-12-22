const APIURL = 'https://api.adviceslip.com/advice';
const diceBtn = document.querySelector('.adviceGenerator__dice');
const adviceTxt = document.querySelector('.adviceGenerator__paragraph');
// const headingTxt = document.querySelector('.adviceGenerator__heading');
const headingContainer = document.querySelector('.adviceGenerator__headingbx');

diceBtn.addEventListener('click', getAdvice);

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
        adviceTxt.innerHTML = data.slip.advice;
        headingContainer.innerHTML = '';
        const headingTxt =  document.createElement('h3');
        headingTxt.classList.add('.adviceGenerator__heading');
        headingTxt.innerHTML = `
           <h3 class="adviceGenerator__heading">ADVICE #${data.slip.id}</h3>
       
        `
        headingContainer.appendChild(headingTxt);
        
    })
};

// getAdvice()