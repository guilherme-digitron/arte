var imagem = 0;
var teste = 0;
document.getElementById('value').textContent = imagem;

function anterior() {
    
    imagem--;
    
    if (imagem < 1) {
      
      imagem = 7;
      
    }
    
    if (imagem == 7) {
      document.getElementById('img1').style.display = 'none';
    }

    if (imagem == 6) {
      document.getElementById('img7').style.display = 'none';
    }

    if (imagem == 5) {
      document.getElementById('img6').style.display = 'none';
    }

    if (imagem == 4) {
      document.getElementById('img5').style.display = 'none';
    }

    if (imagem == 3) {
      document.getElementById('img4').style.display = 'none';
    }
    
    if (imagem == 2) {
      document.getElementById('img3').style.display = 'none';
    }
    
    if (imagem == 1) {
      document.getElementById('img2').style.display = 'none';
    }
    
    
    document.getElementById('img'+imagem).style.display = 'block';
    document.getElementById('value').textContent = imagem;

    
};

function proximo() {
  imagem++;
  
  if (imagem > 7) {
  
    imagem = 1;
  
  }
  
  if (imagem == 1) {
    document.getElementById('img7').style.display = 'none';
  }
  
  if (imagem == 2) {
    document.getElementById('img1').style.display = 'none';
  }
  
  if (imagem == 3) {
    document.getElementById('img2').style.display = 'none';
  }
  
  if (imagem == 4) {
    document.getElementById('img3').style.display = 'none';
  }

  if (imagem == 5) {
    document.getElementById('img4').style.display = 'none';
  }

  if (imagem == 6) {
    document.getElementById('img5').style.display = 'none';
  }

  if (imagem == 7) {
    document.getElementById('img6').style.display = 'none';
  }
  
  document.getElementById('img' + imagem).style.display = 'block';
  document.getElementById('value').textContent = imagem;

  

}

function iniciar()
{

  imagem = 1;
  document.getElementById('btn').style.display = 'flex';
  document.getElementById('iniciar').style.display = 'none';
  document.getElementById('img' + imagem).style.display = 'block';

  document.getElementById('value').textContent = imagem;

 
}

function ver()
{


  if (imagem == 1) {
    window.location.href = "pré-histórica.html"
  }

  if (imagem == 2) {
    window.location.href = "antiga.html"
  }

  if (imagem == 3) {
    window.location.href = "medieval.html"
  }

  if (imagem == 4) {
    window.location.href = "renascentista.html"
  }

  if (imagem == 5) {
    window.location.href = "pre-colonbiana.html"
  }

  if (imagem == 6) {
    window.location.href = "arte moderna.html"
  }

  if (imagem == 7) {
    window.location.href = "arte contemporanea.html"
  }

  document.getElementById('value').textContent = imagem;

}