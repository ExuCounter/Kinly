let searchWraps = document.querySelectorAll('.search-wrap');

searchWraps.forEach(search=>{
    search.oninput = () => {
        if(!(search.querySelector('.search-wrap__close-btn'))){
            search.insertAdjacentHTML('beforeend', `
                <button class="search-wrap__close-btn">
                    X
                </button>
            `);
            search.closest('.search').querySelector('.search-menu').classList.add('active');
        }
        else if(!(search.querySelector('input').value.length)){
            search.querySelector('.search-wrap__close-btn').outerHTML = '';
            search.closest('.search').querySelector('.search-menu').classList.remove('active');
        }
        document.querySelector('body').addEventListener('click', (e)=>{
            if(!(e.target.closest('.search-menu')) && !(e.target == search.querySelector('input'))){
                search.closest('.search').querySelector('.search-menu').classList.remove('active');
            }
        });
        let searchWrapCloseButtons = document.querySelectorAll('.search-wrap__close-btn');
        searchWrapCloseButtons.forEach(btn=>{
            btn.onclick = (e) => {
                e.preventDefault();
                btn.closest('.search-wrap').querySelector('input').value = '';
                search.closest('.search').querySelector('.search-menu').classList.remove('active');
                btn.outerHTML = '';
            }
        })
    }
    search.querySelector('input').onfocus = () =>{
        if(search.querySelector('.search-wrap__close-btn') && search.querySelector('input').value.length){
            search.closest('.search').querySelector('.search-menu').classList.add('active');
        }
    }
})