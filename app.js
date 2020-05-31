

 var elements = document.getElementsByClassName("divclick");


 for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click',function(e){
        window.location.href = 'FlexContainers/' + e.currentTarget.classList[1] + '.html';
  })
 }
