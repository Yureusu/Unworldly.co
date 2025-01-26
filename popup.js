

function popupBtn(){
    document.getElementById('popup-container').style.display = 'flex'; 
}
function closeBtn(){
    document.getElementById('popup-container').style.display = 'none'; 
    window.open('index.html', '_self');
}