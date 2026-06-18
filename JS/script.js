function calculateEMI() {

    let price = parseFloat(document.getElementById("price").value);
    let years = parseFloat(document.getElementById("years").value);
    let interest = parseFloat(document.getElementById("interest").value);

    if (
        isNaN(price) ||
        isNaN(years) ||
        isNaN(interest)
    ) {

        document.getElementById("emiResult").innerHTML =
        `<div class="alert alert-danger">
            Please enter all values correctly.
        </div>`;

        return;
    }

    if (
        price <= 0 ||
        years <= 0 ||
        interest <= 0
    ) {

        document.getElementById("emiResult").innerHTML =
        `<div class="alert alert-danger">
            Values must be greater than zero.
        </div>`;

        return;
    }

    let months = years * 12;
    let r = interest / 12 / 100;

    let emi =
        (price * r * Math.pow(1 + r, months)) /
        (Math.pow(1 + r, months) - 1);

    let total = emi * months;
    let interestAmt = total - price;

    document.getElementById("emiResult").innerHTML =

    `
    <div class="card bg-dark text-white border-primary p-4">

        <h4 class="text-primary">
            Monthly EMI:
            ₹${Math.round(emi).toLocaleString('en-IN')}
        </h4>

        <hr>

        <p>
            <strong>Loan Duration:</strong>
            ${months} Months
        </p>

        <p>
            <strong>Total Interest:</strong>
            ₹${Math.round(interestAmt).toLocaleString('en-IN')}
        </p>

        <p>
            <strong>Total Payable:</strong>
            ₹${Math.round(total).toLocaleString('en-IN')}
        </p>

    </div>
    `;
}