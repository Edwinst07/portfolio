  /**
   * Hero type effect
  
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
     */
const text = "Programador Full Stack, Programador de Sistemas, Programador de Seguridad, Programador Web";
const element = document.querySelector("typed");
let i=0;
let intervalId;
function write(){
  if(i < text.length){
    element.textContent += text.charAt(i);
    i++;
  }else{
    clearInterval(intervalId);
    setTimeout(borrar, 1000);
  }
}

function borrar(){
  if(element.textContent.length > 0){
    element.textContent = element.textContent.slice(0,-1);

  }else{
    i=0;
    setTimeout(write, 500);
  }
}

setTimeout(write, 1000);