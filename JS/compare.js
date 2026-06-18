function compareBikes() {

    const bikes = {

        g310gs: {
            name: "BMW G310GS",
            engine: "313cc",
            power: "34 HP",
            torque: "28 Nm",
            topSpeed: "143 km/h",
            price: "₹3.30 Lakh"
        },

        s1000rr: {
            name: "BMW S1000RR",
            engine: "999cc",
            power: "210 HP",
            torque: "113 Nm",
            topSpeed: "299 km/h",
            price: "₹20.75 Lakh"
        },

        m1000rr: {
            name: "BMW M1000RR",
            engine: "999cc",
            power: "212 HP",
            torque: "113 Nm",
            topSpeed: "314 km/h",
            price: "₹49.00 Lakh"
        }

    };

    let bike1 = document.getElementById("bike1").value;
    let bike2 = document.getElementById("bike2").value;

    if (bike1 === bike2) {

        document.getElementById("compareResult").innerHTML = `
            <div class="alert alert-warning">
                Please select two different bikes.
            </div>
        `;

        return;
    }

    let b1 = bikes[bike1];
    let b2 = bikes[bike2];

    document.getElementById("compareResult").innerHTML = `

        <div class="row g-4">

            <div class="col-md-6">

                <div class="card bg-dark text-white p-4 h-100">

                    <h3>${b1.name}</h3>
                    <hr>

                    <p><strong>Engine:</strong> ${b1.engine}</p>
                    <p><strong>Power:</strong> ${b1.power}</p>
                    <p><strong>Torque:</strong> ${b1.torque}</p>
                    <p><strong>Top Speed:</strong> ${b1.topSpeed}</p>
                    <p><strong>Price:</strong> ${b1.price}</p>

                </div>

            </div>

            <div class="col-md-6">

                <div class="card bg-dark text-white p-4 h-100">

                    <h3>${b2.name}</h3>
                    <hr>

                    <p><strong>Engine:</strong> ${b2.engine}</p>
                    <p><strong>Power:</strong> ${b2.power}</p>
                    <p><strong>Torque:</strong> ${b2.torque}</p>
                    <p><strong>Top Speed:</strong> ${b2.topSpeed}</p>
                    <p><strong>Price:</strong> ${b2.price}</p>

                </div>

            </div>

        </div>

    `;
}