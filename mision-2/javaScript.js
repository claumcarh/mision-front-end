const paragraph = document.getElementById('paragraph');
const image = document.getElementById('image');
const buttonChangeImage = document.getElementById('buttonChangeImage');
const buttonChangeParagraph = document.getElementById('buttonChangeParagraph');

buttonChangeImage.addEventListener('click', () => {
  const src = image.src;

  if (src.includes('medusa2')) {
    image.src = './img/medusa1.jpg';
    image.style = `
      height: 500px;
      background-color: #ffffff;
    `;
  } else {
    image.src = './img/medusa2.jpg';
    image.style = null;
  }
});

buttonChangeParagraph.addEventListener('click', () => {
  const innerText = paragraph.innerHTML;

  if (innerText.includes('medusas')) {
    paragraph.innerText =
    'Aprendí a manipular elementos del DOM usando JavaScript';
  } else {
    paragraph.innerText = 'Las medusas son animales que poseen la habilidad única de regenerar partes del cuerpo. Un equipo de investigadores japoneses ha revelado los mecanismos celulares que le dan a las medusas estos “superpoderes”.';
  }
});
