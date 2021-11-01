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

        document.querySelector("#locoName").value = "";
        document.querySelector("#locoType").value = "";
        document.querySelector("#locoPowerType").value = "";
        document.querySelector("#locoLength").value = "";
        document.querySelector("#locoHeight").value = "";
        document.querySelector("#locoSpeed").value = "";
        document.querySelector("#locoHp").value = "";
        document.querySelector("#locoAxles").value = "";
        document.querySelector("#locoAxles").value = "";
        document.querySelector("#imageUrl").value = "";
        
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

        document.querySelector("#freightName").value = "";
        document.querySelector("#freightLength").value = "";
        document.querySelector("#freightWidth").value = "";
        document.querySelector("#freightHeight").value = "";
        document.querySelector("#freightCapacity").value = "";
        document.querySelector("#imageUrlFreight").value = "";

    })

    document.querySelector("#passengerButton").addEventListener("click", event => {
        var name = document.querySelector("#passengerName").value;
        var length = document.querySelector("#passengerLength").value;
        var width = document.querySelector("#passengerWidth").value;
        var height = document.querySelector("#passengerHeight").value;
        var capacity = document.querySelector("#passengerCapacity").value;
        var image = document.querySelector("#imageUrlPassenger").value;

        console.log(image)

        fetch("/create/passenger", {
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

        document.querySelector("#passengerName").value = "";
        document.querySelector("#passengerLength").value = "";
        document.querySelector("#passengerWidth").value = "";
        document.querySelector("#passengerHeight").value = "";
        document.querySelector("#passengerCapacity").value = "";
        document.querySelector("#imageUrlPassenger").value = "";
    })
})