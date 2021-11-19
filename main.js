let themeToggler = document.querySelector('#theme-toggler');
        themeToggler.onclick = () =>{
            themeToggler.classList.toggle('bx-sun');

            if(themeToggler.classList.contains('bx-sun')){
                document.body.classList.add('active');
            }else{
                document.body.classList.remove('active');
            }
            
        }