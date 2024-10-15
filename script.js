const div1 = document.getElementById('paymentsummary');
const div2 = document.getElementById('itemshow');
const div3 = document.getElementById('mainfooter')


function toggleDivs() {
    
    if (div1.style.display !== 'none') {
        div1.style.display = 'none';
        div2.style.display = 'block';
        div3.style.display = 'flex'
    } 
}

function returndivs(){
        div1.style.display = 'flex';
        div2.style.display = 'none';
        div3.style.display = 'none'
}


