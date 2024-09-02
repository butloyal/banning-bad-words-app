const content = document.querySelector('.content');
const lineNumbers = document.querySelector('.line-numbers');

content.addEventListener('input', function() {
  const lines = content.value.split('\n').length;

  lineNumbers.innerHTML = '';

  for (let index = 0; index < lines; index++) {
    if (index === 0) { 
        lineNumbers.innerHTML = (lineNumbers.innerHTML + (index + 1));
    } else {
        lineNumbers.innerHTML = (lineNumbers.innerHTML + '<br>' + (index + 1));
    }
  }
});