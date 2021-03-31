var selector = document.querySelector(".modal__input_tel");

var im = new Inputmask("+7(999) 999-9999");
im.mask(selector);

const catalog = document.querySelector('.catalog__list');

catalog.addEventListener('click', e => {
    const className = 'car-info__button_form'
    if (e.target.className.includes(className)) {
        document.querySelector('.modal').classList.add('modal_active');
        window.addEventListener('click', e => {
            if (e.target.className.includes('modal_active')) {
                document.querySelector('.modal').classList.remove('modal_active');
            }
        })
    }
});

document.querySelector('.modal__close').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('modal_active');
})