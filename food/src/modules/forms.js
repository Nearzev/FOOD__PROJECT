function forms() {
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    forms.forEach(el => {
        bindPostData(el);
    });


    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await  res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            

            
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));


            
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                ShowThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                ShowThanksModal(message.failure); 
            }).finally(() => {
                form.reset();
            })

        });
    }

    function ShowThanksModal(message) {
        const prevModalDialog  = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    fetch('db.json')
        .then(data => data.json())
        .then(res => console.log(res))

}

module.exports = forms;