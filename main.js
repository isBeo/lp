const mobileMenu = document
                .querySelector('.toggle');
const nav = document.querySelector('header nav');
    

    mobileMenu.addEventListener('click',(e)=>{
        const m = nav
        if(m.style.display==='none'){
            m.style.display='flex';
        }
        else{
            m.style.display='none'
        }

        console.log(m);
        
    })


    console.log();
    