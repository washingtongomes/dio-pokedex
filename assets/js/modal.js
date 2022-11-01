
    function iniciamodal(modalID){
     
        const modal = document.getElementById(modalID)
        if(modal){
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) =>{
         if (e.target.id==modalID || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
            localStorage.fecharModal = modalID
         }


        })
    }
}

    const conteudo = document.querySelector('.poke')
   conteudo.addEventListener('click', () => iniciamodal('modal-id'));
   

