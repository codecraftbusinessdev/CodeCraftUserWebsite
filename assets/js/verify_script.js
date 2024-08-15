
function displayTable() {
    const id = document.getElementById("idField").value;
    const tableContainer = document.getElementById("tableContainer");

    fetch('http://localhost:8080/verifyCertificate/CTJUL24008')
    // Replace this with your actual data fetching logic
    const tableData = [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Smith", age: 25 },
        // ... more data
    ];

    // Create table structure
    const table = document.createElement("table");
//    const headerRow1 = table.insertRow();
//    const headerCell1 = headerRow1.insertCell();
//    const headerCell2 = headerRow1.insertCell();
//    headerCell1.textContent = "CERTIFICATE ID";
//    headerCell2.textContent = "CTJUL24008";

    // Populate table with data
    tableData.forEach(data => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        cell1.textContent = data.id;
        cell2.textContent = data.name;
        cell3.textContent = data.age;
    });

    // Clear previous table content
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
}

