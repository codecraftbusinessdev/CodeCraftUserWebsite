const verify_certificate = async ()=>{

    const verifyButton = document.getElementById('verifyButton');
    const loadingText = document.getElementById('loadingText');

    verifyButton.addEventListener('click', async () => {
            const certificateId = document.getElementById('idField').value;
            const certificateTable = document.getElementById('certificateTable')

            if (!certificateId) {
                alert('Please enter a certificate ID.');
                return;
            }
            loadingText.textContent="Loading...";

            try {

                const response = await fetch('https://script.google.com/macros/s/AKfycbyxS5uy9YEkjoaIjaAkpnKl7rtQKsZk8qcfVa7NlIHFo3yssSIZxjfiJcItePyGK6AS/exec?certificate_id='+certificateId);
                const data = await response.json();

                loadingText.textContent="";

                // Clear existing table rows before adding new data
                certificateTable.tBodies[0].innerHTML = '';

                const tableRow1 = document.createElement('tr');
                const tableRow2 = document.createElement('tr');
                const tableRow3 = document.createElement('tr');
                const tableRow4 = document.createElement('tr');
                const tableRow5 = document.createElement('tr');
                const tableRow6 = document.createElement('tr');
                const tableRow7 = document.createElement('tr');
                const tableRow8 = document.createElement('tr');
                const tableRow9 = document.createElement('tr');
                const tableRow10 = document.createElement('tr');
                const tableRow11 = document.createElement('tr');
                const tableRow12 = document.createElement('tr');
                const tableRow13 = document.createElement('tr');
                const tableRow14 = document.createElement('tr');
                const tableRow15 = document.createElement('tr');



                tableRow1.innerHTML = `
                    <th>Certificate ID</th>
                    <td>${data.data[0].certificate_id}</td>
                `;
                tableRow2.innerHTML = `
                    <th>Name</th>
                    <td>${data.data[0].name}</td>
                `;
                tableRow3.innerHTML = `
                    <th>Email</th>
                    <td>${data.data[0].email}</td>
                `;
                tableRow4.innerHTML = `
                    <th>Mobile No</th>
                    <td>${data.data[0].mobile_no}</td>
                `;
                tableRow5.innerHTML = `
                    <th>Gender</th>
                    <td>${data.data[0].gender}</td>
                `;
                tableRow6.innerHTML = `
                    <th>Internship Duration</th>
                    <td>1 Month</td>
                `;
                tableRow7.innerHTML = `
                    <th>Internship Track</th>
                    <td>${data.data[0].internship_track}</td>
                `;
                tableRow8.innerHTML = `
                    <th>College Name</th>
                    <td>${data.data[0].college_name}</td>
                `;
                tableRow9.innerHTML = `
                    <th>Qualification</th>
                    <td>${data.data[0].qualification}</td>
                `;
                tableRow10.innerHTML = `
                    <th>Passing Year</th>
                    <td>${data.data[0].passing_year}</td>
                `;
                tableRow11.innerHTML = `
                    <th>Offer Letter Issue Date</th>
                    <td>${data.data[0].offer_letter_issue_date}</td>
                `;
                tableRow12.innerHTML = `
                    <th>Internship Start Date</th>
                    <td>${data.data[0].internship_start_date}</td>
                `;
                tableRow13.innerHTML = `
                    <th>Internship End Date</th>
                    <td>${data.data[0].internship_end_date}</td>
                `;
                tableRow14.innerHTML = `
                    <th>Internship Status</th>
                    <td>${data.data[0].internship_status}</td>
                `;
                tableRow15.innerHTML = `
                    <th>Certificate Issue Date</th>
                    <td>${data.data[0].certificate_issue_date}</td>
                `;

                certificateTable.tBodies[0].appendChild(tableRow1);
                certificateTable.tBodies[0].appendChild(tableRow2);
                //certificateTable.tBodies[0].appendChild(tableRow3);
                //certificateTable.tBodies[0].appendChild(tableRow4);
                //certificateTable.tBodies[0].appendChild(tableRow5);
                certificateTable.tBodies[0].appendChild(tableRow6);
                certificateTable.tBodies[0].appendChild(tableRow7);
                certificateTable.tBodies[0].appendChild(tableRow8);
               // certificateTable.tBodies[0].appendChild(tableRow9);
                //certificateTable.tBodies[0].appendChild(tableRow10);
                //certificateTable.tBodies[0].appendChild(tableRow11);
                certificateTable.tBodies[0].appendChild(tableRow12);
                certificateTable.tBodies[0].appendChild(tableRow13);
                //certificateTable.tBodies[0].appendChild(tableRow14);
                certificateTable.tBodies[0].appendChild(tableRow15);

            } catch (error) {
               loadingText.textContent="No Found or Internship is not completed yet";
            }
        });

}

verify_certificate();