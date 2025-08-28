const imagens = document.querySelectorAll ('.galeria .img');
const procurar = document.querySelector('.search');

function selecionado(categoria) {

    imagens.forEach(img => {
        if (categoria === 'todos') {
            img.parentElement.style.display = 'block'; 
        } else if (img.classList.contains(categoria)) {
            img.parentElement.style.display = 'block';
        } else {
            img.parentElement.style.display = 'none';
        }
    });
}


procurar.addEventListener('keyup', () => {
    const termo = procurar.value.toLowerCase();
    imagens.forEach(img =>{
        const alt = img.alt.toLowerCase();
        if (alt.includes(termo)) {
            img.parentElement.style.display = "block";
        } else {
            img.parentElement.style.display = "none";
        }
    }); 
});