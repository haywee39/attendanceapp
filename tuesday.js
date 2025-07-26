        const eventDateInput = document.getElementById('eventDate');
        const dateError = document.getElementById('dateError');
        const numBoysInput = document.getElementById('numBoys');
        const numGirlsInput = document.getElementById('numGirls');
        const totalSumInput = document.getElementById('totalSum');
        const dataEntryForm = document.getElementById('dataEntryForm');

        // Function to check if a given date is a Tuesday
        function isTuesday(dateString) {
            const date = new Date(dateString);
            return date.getDay() === 2; // 0 is Sunday, 1 is Monday, 2 is Tuesday
        }

        // Validate date on change
        eventDateInput.addEventListener('change', function() {
            if (this.value) {
                if (!isTuesday(this.value)) {
                    dateError.textContent = 'Day is NOT a Tuesday!.';
                    this.setCustomValidity('ENTER a TUESDAY date!.'); // Mark as invalid
                } else {
                    dateError.textContent = '';
                    this.setCustomValidity(''); // Mark as valid
                }
            } else {
                 dateError.textContent = 'Please select a date.';
                 this.setCustomValidity('Please select a date.');
            }
        });

        // Function to calculate total
        function calculateTotal() {
            const numBoys = parseInt(numBoysInput.value) || 0;
            const numGirls = parseInt(numGirlsInput.value) || 0;
            totalSumInput.value = numBoys + numGirls;
        }

        // Add event listeners for input changes to auto-sum
        numBoysInput.addEventListener('input', calculateTotal);
        numGirlsInput.addEventListener('input', calculateTotal);

        // Initial calculation when page loads
        document.addEventListener('DOMContentLoaded', calculateTotal);

        // Handle form submission
        dataEntryForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Re-validate date just before submission
            if (eventDateInput.value && !isTuesday(eventDateInput.value)) {
                alert('Please correct the date. It must be a Tuesday.');
                eventDateInput.focus();
                return;
            }

            // You can now collect your form data
            const date = eventDateInput.value;
            const boys = parseInt(numBoysInput.value);
            const girls = parseInt(numGirlsInput.value);
            const total = parseInt(totalSumInput.value);

            console.log('--- Form Data ---');
            console.log('Date:', date);
            console.log('Boys:', boys);
            console.log('Girls:', girls);
            console.log('Total:', total);
            console.log('-----------------');

            alert('Data saved successfully! (Check console for details)');

            // In a real application, you would send this data to a server here
            // e.g., using fetch() or XMLHttpRequest
        });