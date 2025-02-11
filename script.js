   // Sidebar Toggle
   document.getElementById("toggleSidebar").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("w-0");
    sidebar.classList.toggle("w-64");
});

// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-white");
    document.body.classList.toggle("bg-gray-100");
});

// Add Transaction Functionality
document.getElementById("addTransactionBtn").addEventListener("click", function () {
    const date = document.getElementById("dateInput").value;
    const customer = document.getElementById("customerInput").value;
    const amount = document.getElementById("amountInput").value;
    const status = document.getElementById("statusInput").value;

    if (date && customer && amount) {
        const tableBody = document.getElementById("transactionTableBody");
        const newRow = document.createElement("tr");
        newRow.classList.add("border-t");
        newRow.innerHTML = `
            <td class="p-3">${date}</td>
            <td class="p-3">${customer}</td>
            <td class="p-3">$${amount}</td>
            <td class="p-3 ${status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}">${status}</td>
        `;
        tableBody.appendChild(newRow);
    } else {
        alert("Please fill in all fields");
    }
});

// Logout Functionality (Redirect Simulation)
document.getElementById("logoutBtn").addEventListener("click", function () {
    alert("Logging out...");
    window.location.href = "login.html"; // Change this to your actual logout page
});