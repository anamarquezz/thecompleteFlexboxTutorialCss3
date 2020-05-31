
document.querySelector('.divclick').addEventListener('click',function(e){
    window.location.href = 'FlexContainers/' + e.currentTarget.classList[1] + '.html';
 });