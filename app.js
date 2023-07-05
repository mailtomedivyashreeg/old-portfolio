const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

/* to navigate from one page to another*/
let activelink =0;

links.forEach((link,i)=>{
    link.addEventListener('click', () => {
        if(activelink != i){
            links[activelink].classList.remove('active');
            link.classList.add('active');
            sections[activelink].classList.remove('active');
            
            setTimeout(()=>{
                activelink = i;
                sections[i].classList.add('active');
            },1000);
        }
    })
})
       