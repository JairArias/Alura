
document.addEventListener('DOMContentLoaded', () => {
  const section1 = document.querySelector(".body__main__sidebar__option1");
  const section2 = document.querySelector(".body__main__sidebar__option2");
  const encriptacionOutput = document.querySelector(".body__main__sidebar__encriptacion");
  const textarea = document.querySelector(".body__main__section__text");

  const toggleSections = () => {
    if (textarea.value === "") {
      section1.style.visibility = 'visible';
      section2.style.visibility = 'hidden';
    }
  };

  const encriptar = () => {
    let texto = textarea.value;
    if (texto.trim() !== "") {
      let resultado = texto.toLowerCase().replace(/[aeiou]/g, function(match) {
        switch (match) {
          case 'a':
            return 'ai';
          case 'e':
            return 'enter';
          case 'i':
            return 'imes';
          case 'o':
            return 'ober';
          case 'u':
            return 'ufat';
          default:
            return match;
        }
      });
      encriptacionOutput.textContent = resultado;
      section1.style.visibility = 'hidden';
      section2.style.visibility = 'visible';
    } else {
      toggleSections();
    }
  };

  const desencriptar = () => {
    let texto = textarea.value;
    let reemplazos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    let regex = new RegExp(Object.keys(reemplazos).join('|'), 'gi');
  
    let resultado = texto.toLowerCase().replace(regex, function(match) {
        return reemplazos[match.toLowerCase()]; 
    });
    encriptacionOutput.textContent = resultado;
    section1.style.visibility = 'hidden';
    section2.style.visibility = 'visible';
  };

  const copiarTexto = () => {
    const textToCopy = encriptacionOutput.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Texto copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
  };

  // Inicializar visibilidad de las secciones
  toggleSections();

  // Vincular eventos
  textarea.addEventListener('input', toggleSections);
  document.querySelector(".body__main__section__btns__btn1").addEventListener('click', encriptar);
  document.querySelector(".body__main__section__btns__btn2").addEventListener('click', desencriptar);
  document.querySelector(".body__main__section__btns__btn3").addEventListener('click', copiarTexto);
});

