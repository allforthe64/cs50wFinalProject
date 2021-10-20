document.addEventListener('DOMContentLoaded', function() {

    document.querySelector("#locoButton").addEventListener("click", item => {

        var loco_name = document.querySelector("#locoName").value;
        var loco_type = document.querySelector("#locoType").value;
        var power_type = document.querySelector("#locoPowerType").value;
        var length = document.querySelector("#locoLength").value;
        var height = document.querySelector("#locoHeight").value;
        var speed = document.querySelector("#locoSpeed").value;
        var hp = document.querySelector("#locoHp").value;
        var axels = document.querySelector("#locoAxles").value;
        var included = document.querySelector("#locoAxles").value;
        var image = document.querySelector("#imageUrl").value;

        fetch("/create/loco", {
            method: "PUT",
            body: JSON.stringify({
                name: loco_name,
                type: loco_type,
                powerType: power_type,
                locoLength: length,
                locoHeight: height,
                locoSpeed: speed,
                horsePower: hp,
                locoAxels: axels,
                location: included,
                url: image
            })
        })

        
    })

    document.querySelector("#freightButton").addEventListener("click", event => {
        var name = document.querySelector("#freightName").value;
        var length = document.querySelector("#freightLength").value;
        var width = document.querySelector("#freightWidth").value;
        var height = document.querySelector("#freightHeight").value;
        var capacity = document.querySelector("#freightCapacity").value;
        var image = document.querySelector("#imageUrlFreight").value;

        console.log(image)

        fetch("/create/freight", {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                length: length,
                width: width,
                height: height,
                load: capacity,
                image: image
            })
        })
        alert("Added Entry!");
    })
})