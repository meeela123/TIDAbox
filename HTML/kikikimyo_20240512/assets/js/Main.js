var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', function () {
myInput.focus()
});

function modalClose() {
// #で始まるリンクを取得
    const jsSmoothScroll = document.querySelectorAll('a[href^="#"]');
    // forで回してaddEventListenerする
    for (let i = 0; i < jsSmoothScroll.length; i++){
    jsSmoothScroll[i].addEventListener('click', (e) => {
        e.preventDefault();
        // href属性の取得
        let href = jsSmoothScroll[i].getAttribute('href');
        let target = document.getElementById(href.replace('#', ''));
        const rect = target.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        // 移動先のポジション取得
        const position = rect + offset;
        window.scrollTo({
        top: position,
        behavior: 'smooth',
    });
    });
}
$("#exampleModal").modal('hide');
}