document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Patient registered successfully!');
  });
  
  document.getElementById('appointmentForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Appointment scheduled successfully!');
  });
  
  document.getElementById('viewRecords').addEventListener('click', () => {
    alert('Displaying electronic health records...');
  });
  
  document.getElementById('processBilling').addEventListener('click', () => {
    alert('Billing process initiated!');
  });
  
  document.getElementById('generateReport').addEventListener('click', () => {
    alert('Generating treatment progress report...');
  });
  