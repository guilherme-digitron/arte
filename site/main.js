var btn = document.querySelector('.mobile-menu-btn');
var  objeto = document.querySelector('.mobile-menu');
  
  btn.addEventListener('click', function(){
  
  if(objeto.style.display === 'block')
  {objeto.style.display = 'none';
   /*document.querySelector('.ico').src = '';*/
  } else 
  {objeto.style.display = 'block';}
  
  });

  function tamanho ()
  {

    if (window.innerWidth >= 759) {
      
      objeto.style.display = 'none'

    }else
    {

      objeto.style.display = 'block'

    }

  }