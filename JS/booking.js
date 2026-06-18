function bookRide() {

    let name = document.getElementById("name").value.trim();
    let bike = document.getElementById("bike").value;
    let date = document.getElementById("date").value;

    if (name === "" || bike === "" || date === "") {

        alert("Please fill all details.");
        return;
    }

    let selectedDate = new Date(date);
    let today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {

        alert("Please select a future date.");
        return;
    }

    alert(
        "✅ Test Ride Booked Successfully!\n\n" +
        "Name: " + name +
        "\nBike: " + bike +
        "\nDate: " + date
    );

    document.getElementById("rideForm").reset();
}