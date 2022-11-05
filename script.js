const bar=documet.getElementById('bar');
const nav=documet.getElementById('navbar');

if(bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}