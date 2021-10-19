document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll(".compHeaders").forEach(item => {
        item.addEventListener("click", event => {
            
            if (item.id == "locomotive") {
                fetch("/locomotives")
                    .then(response => response.json())
                    .then(result => {
                        
                        //reference result[i]["fieldname"]

                        for (let i = 0; i < result.length; i ++) {
                            
                            //create a new div
                            var div = document.createElement('div');
                            div.className = "entryContainer";

                            var jumbo = document.querySelector(".jumbotron");

                            jumbo.appendChild(div);
                        }
                    })
            }
        })
    })
})