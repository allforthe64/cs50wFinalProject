document.addEventListener('DOMContentLoaded', function() {

    var bakerloo = document.querySelector('#bakerloo');
    bakerloo.style.display='none';

    var german = document.querySelector('#german');
    german.style.display='none';
    
    //query page for all buttons
    document.querySelectorAll("#selectorButton").forEach(item => {
        item.addEventListener("click", event => {
            
            //set target equal to the location that should be shown
            var target = item.value; 

            //query for article divs
            document.querySelectorAll(".article").forEach(article => {
                
                //check to see if target is equal to article's id
                if (article.id == target) {
                    //display article
                    article.style.display = 'block';
                }
                else {
                    //hide article
                    article.style.display = 'none';
                }
            })
        })
    })
})