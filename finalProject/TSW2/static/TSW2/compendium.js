document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll(".compHeaders").forEach(item => {
        item.addEventListener("click", event => {
            
            if (item.id == "locomotive") {
                fetch("/locomotives")
                    .then(response => response.json())
                    .then(result => {
                        
                        //reference result[i]["fieldname"]

                        
                    })
            }
        })
    })
})