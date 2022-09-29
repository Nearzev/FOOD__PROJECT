function modal() {
    
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal');
    
    function openModal () {
        modalWindow.classList.add('show')
        document.body.style.overflow = 'hidden';
    }

    function closeModal () {
        modalWindow.classList.remove('show')
        document.body.style.overflow = '';
    }
    
    modalTrigger.forEach(el => {
        el.addEventListener('click', () => {
            openModal();
        });
    });

    

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWindow .classList.contains('show')) {
            closeModal();
        }
    });
}

module.exports = modal;