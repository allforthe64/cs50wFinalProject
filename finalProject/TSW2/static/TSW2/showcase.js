document.addEventListener('DOMContentLoaded', function () {

    let swap = 1;

    document.querySelector("#R").addEventListener("click", event => {

        document.querySelectorAll(".dot").forEach(item => {
            item.style.backgroundColor = "#7c7c7c";
        })
        
        //add one to swap variable
        swap ++;

        if (swap == 12) {
            swap = 1;
        }
        
        //find element to style
        var dot = document.getElementById(swap)
        
        //style dot
        dot.style.backgroundColor = "red";
    })

    document.querySelector("#L").addEventListener("click", event => {
        
        document.querySelectorAll(".dot").forEach(item => {
            item.style.backgroundColor = "#7c7c7c";
        })

        //subtract one from swap variable
        swap --;

        if (swap == 0) {
            swap = 11;
        }
        
        //find element to style
        var dot = document.getElementById(swap)
        
        //style dot
        dot.style.backgroundColor = "red";
    })
})