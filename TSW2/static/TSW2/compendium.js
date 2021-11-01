document.addEventListener('DOMContentLoaded', function() {

    //hide all of the add entry areas
    document.querySelector("#addLoco").style.display = "none";
    document.querySelector("#addFreight").style.display = "none";
    document.querySelector("#addPassenger").style.display = "none";

    document.querySelectorAll(".compHeaders").forEach(item => {
        item.addEventListener("click", event => {
            
            if (item.id == "locomotive") {

                //clear all elements out of jumbotron
                var jumbo = document.querySelector(".jumbotron");
                jumbo.querySelectorAll('.container').forEach(item => {
                    item.remove();
                })

                fetch("/locomotives")
                    .then(response => response.json())
                    .then(result => {
                        
                        //reference result[i]["fieldname"]

                        for (let i = 0; i < result.length; i ++) {
                            
                            //create a new div
                            var div = document.createElement('div');
                            div.className = "container";
                            div.style.backgroundColor = "white";
                            div.style.marginTop = "5%";
                            div.style.borderRadius = "30px";
                            div.style.boxShadow = "10px 5px 30px #000000";

                            //append main div to hero element
                            var jumbo = document.querySelector(".jumbo");
                            jumbo.appendChild(div);

                            //create second div and append to main div
                            var div1 = document.createElement('div');
                            div1.style.lineHeight = "12px";
                            div.appendChild(div1)

                            //append spacing element to second div
                            var br = document.createElement('br');
                            div1.appendChild(br);

                            //create the locomotive name header
                            var loco_name = document.createElement("p");
                            loco_name.className = "articleHeaders";
                            loco_name.innerHTML = `${result[i]["modelName"]}`;
                            loco_name.style.color = "black";
                            loco_name.style.marginLeft = "5%";
                            loco_name.style.marginTop = "5%";
                            div1.appendChild(loco_name);

                            //create the locomotive type holder
                            var loco_type = document.createElement("p");
                            loco_type.className = "comparisonParagraphs";
                            loco_type.innerHTML = `Locomotive Type: ${result[i]["modelType"]}`;
                            loco_type.style.marginLeft = "10%";
                            loco_type.style.marginTop = "5%";
                            loco_type.style.color = "black";
                            div1.appendChild(loco_type);

                            //create the power type holder
                            var power_type = document.createElement("p");
                            power_type.className = "comparisonParagraphs";
                            power_type.innerHTML = `Power Type: ${result[i]["powerType"]}`;
                            power_type.style.marginLeft = "10%";
                            power_type.style.color = "black";
                            div1.appendChild(power_type);

                            //create the length holder
                            var length = document.createElement("p");
                            length.className = "comparisonParagraphs";
                            length.innerHTML = `Length: ${result[i]["length"]}`;
                            length.style.marginLeft = "10%";
                            length.style.color = "black";
                            div1.appendChild(length);

                            //create the height holder
                            var height = document.createElement("p");
                            height.className = "comparisonParagraphs";
                            height.innerHTML = `Height: ${result[i]["height"]}`;
                            height.style.marginLeft = "10%";
                            height.style.color = "black";
                            div1.appendChild(height);

                            //create the speed holder
                            var speed = document.createElement("p");
                            speed.className = "comparisonParagraphs";
                            speed.innerHTML = `Top Speed: ${result[i]["speed"]} mph/${result[i]["speed"] * 1.6} kmh`;
                            speed.style.marginLeft = "10%";
                            speed.style.color = "black";
                            div1.appendChild(speed);

                            //create the hp holder
                            var hp = document.createElement("p");
                            hp.className = "comparisonParagraphs";
                            hp.innerHTML = `Horse Power: ${result[i]["hp"]}hp`;
                            hp.style.marginLeft = "10%";
                            hp.style.color = "black";
                            div1.appendChild(hp);

                            //create the axles holder
                            var axles = document.createElement("p");
                            axles.className = "comparisonParagraphs";
                            axles.innerHTML = `Number Of Axles: ${result[i]["axles"]}`;
                            axles.style.marginLeft = "10%";
                            axles.style.color = "black";
                            div1.appendChild(axles);

                            //create the location holder
                            var location = document.createElement("p");
                            location.className = "comparisonParagraphs";
                            location.innerHTML = `Included In: ${result[i]["location"]}`;
                            location.style.marginLeft = "10%";
                            location.style.color = "black";
                            div1.appendChild(location);

                            div.appendChild(document.createElement("br"));

                            //image
                            var img = document.createElement('img');
                            img.src = result[i]["image"];
                            img.style.width = "50%";
                            img.style.height = "30%";
                            img.style.marginLeft = "10%";
                            img.style.marginBottom = "5%";
                            img.style.border = "1px solid black";
                            div.appendChild(img);

                        }
                    })

                document.querySelector("#addLoco").style.display = "block";
                document.querySelector("#addFreight").style.display = "none";
                document.querySelector("#addPassenger").style.display = "none";
            } 

            //passenger cars
            if (item.id == "passenger") {
                
                //clear all elements out of jumbotron
                var jumbo = document.querySelector(".jumbotron");
                jumbo.querySelectorAll('.container').forEach(item => {
                    item.remove();
                })

                fetch("/passenger")
                    .then(response => response.json())
                    .then(result => {
                        
                        for (let i = 0; i < result.length; i ++) {
                            //create a new div
                            var div = document.createElement('div');
                            div.className = "container";
                            div.style.backgroundColor = "white";
                            div.style.marginTop = "5%";
                            div.style.borderRadius = "30px";
                            div.style.boxShadow = "10px 5px 30px #000000";

                            //append main div to hero element
                            var jumbo = document.querySelector(".jumbo");
                            jumbo.appendChild(div);

                            //create second div and append to main div
                            var div1 = document.createElement('div');
                            div1.style.lineHeight = "12px";
                            div.appendChild(div1)

                            //append spacing element to second div
                            var br = document.createElement('br');
                            div1.appendChild(br);

                            //create the passenger car name header
                            var passenger_name = document.createElement("p");
                            passenger_name.className = "articleHeaders";
                            passenger_name.innerHTML = `${result[i]["name"]}`;
                            passenger_name.style.color = "black";
                            passenger_name.style.marginLeft = "5%";
                            passenger_name.style.marginTop = "7%";
                            div1.appendChild(passenger_name);

                            //create the passenger car length holder
                            var length = document.createElement("p");
                            length.className = "comparisonParagraphs";
                            length.innerHTML = `Length: ${result[i]["length"]}`;
                            length.style.marginLeft = "10%";
                            length.style.marginTop = "7%";
                            length.style.color = "black";
                            div1.appendChild(length);

                            //create the passenger car width holder
                            var width = document.createElement("p");
                            width.className = "comparisonParagraphs";
                            width.innerHTML = `Width: ${result[i]["width"]}`;
                            width.style.marginLeft = "10%";
                            width.style.color = "black";
                            div1.appendChild(width);

                            //create the passenger car width holder
                            var height = document.createElement("p");
                            height.className = "comparisonParagraphs";
                            height.innerHTML = `Height: ${result[i]["height"]}`;
                            height.style.marginLeft = "10%";
                            height.style.color = "black";
                            div1.appendChild(height);

                            //create the passenger car width holder
                            var capacity = document.createElement("p");
                            capacity.className = "comparisonParagraphs";
                            capacity.innerHTML = `Capacity: ${result[i]["capacity"]} Passengers`;
                            capacity.style.marginLeft = "10%";
                            capacity.style.color = "black";
                            div1.appendChild(capacity);

                            div.appendChild(document.createElement("br"));

                            //image
                            var img = document.createElement('img');
                            img.src = result[i]["image"];
                            img.style.width = "50%";
                            img.style.height = "30%";
                            img.style.marginLeft = "10%";
                            img.style.marginBottom = "5%";
                            img.style.border = "1px solid black";
                            div.appendChild(img);
                        }
                        
                    })
                
                document.querySelector("#addLoco").style.display = "none";
                document.querySelector("#addFreight").style.display = "none";
                document.querySelector("#addPassenger").style.display = "block";
            }

            if (item.id == "freight") {

                //clear all elements out of jumbotron
                var jumbo = document.querySelector(".jumbotron");
                jumbo.querySelectorAll('.container').forEach(item => {
                    item.remove();
                })

                fetch("/freight")
                    .then(response => response.json())
                    .then(result => {
                        
                        for (let i = 0; i < result.length; i ++) {
                            //create a new div
                            var div = document.createElement('div');
                            div.className = "container";
                            div.style.backgroundColor = "white";
                            div.style.marginTop = "5%";
                            div.style.borderRadius = "30px";
                            div.style.boxShadow = "10px 5px 30px #000000";

                            //append main div to hero element
                            var jumbo = document.querySelector(".jumbo");
                            jumbo.appendChild(div);

                            //create second div and append to main div
                            var div1 = document.createElement('div');
                            div1.style.lineHeight = "12px";
                            div.appendChild(div1)

                            //append spacing element to second div
                            var br = document.createElement('br');
                            div1.appendChild(br);

                            //create the freight car name header
                            var freight_name = document.createElement("p");
                            freight_name.className = "articleHeaders";
                            freight_name.innerHTML = `${result[i]["name"]}`;
                            freight_name.style.color = "black";
                            freight_name.style.marginLeft = "5%";
                            freight_name.style.marginTop = "7%";
                            div1.appendChild(freight_name);

                            //create the freight car length holder
                            var length = document.createElement("p");
                            length.className = "comparisonParagraphs";
                            length.innerHTML = `Length: ${result[i]["length"]}`;
                            length.style.marginLeft = "10%";
                            length.style.marginTop = "7%";
                            length.style.color = "black";
                            div1.appendChild(length);

                            //create the freight car width holder
                            var width = document.createElement("p");
                            width.className = "comparisonParagraphs";
                            width.innerHTML = `Width: ${result[i]["width"]}`;
                            width.style.marginLeft = "10%";
                            width.style.color = "black";
                            div1.appendChild(width);

                            //create the freight car width holder
                            var height = document.createElement("p");
                            height.className = "comparisonParagraphs";
                            height.innerHTML = `Height: ${result[i]["height"]}`;
                            height.style.marginLeft = "10%";
                            height.style.color = "black";
                            div1.appendChild(height);

                             //create the freight car load holder
                             var load = document.createElement("p");
                             load.className = "comparisonParagraphs";
                             load.innerHTML = `Max Load: ${result[i]["load"]} Tons`;
                             load.style.marginLeft = "10%";
                             load.style.color = "black";
                             div1.appendChild(load);

                            div.appendChild(document.createElement("br"));

                            //image
                            var img = document.createElement('img');
                            img.src = result[i]["image"];
                            img.style.width = "50%";
                            img.style.height = "30%";
                            img.style.marginLeft = "10%";
                            img.style.marginBottom = "5%";
                            img.style.border = "1px solid black";
                            div.appendChild(img);
                        }   
                    })

                document.querySelector("#addLoco").style.display = "none";
                document.querySelector("#addFreight").style.display = "block";
                document.querySelector("#addPassenger").style.display = "none";

            }

        })
    })
})