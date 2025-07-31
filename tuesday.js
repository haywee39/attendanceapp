
        const dataEntryForm = document.getElementById('dataEntryForm');
        const eventDateInput = document.getElementById('eventDate');
        const dateError = document.getElementById('dateError');
        const numBoysInput = document.getElementById('numBoys');
        const numGirlsInput = document.getElementById('numGirls');
        const totalSumInput = document.getElementById('totalSum');

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

        // Handle form submission
        dataEntryForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Re-validate date just before submission
            if (eventDateInput.value && !isTuesday(eventDateInput.value)) {
                alert('Please correct the date. It must be a Tuesday.');
                eventDateInput.focus();
                return;
            }

            const form = e.target;
            const formData = new FormData(form);
            const params = new URLSearchParams(formData);

            fetch("https://script.google.com/macros/s/AKfycbyagkDt6oTv1QfDEILHcPPU0qlurTZ8FTKRaW_q6Hkzn9t_D9W2BI1UyPoVmboJpO67qg/exec", {
                method: "POST",
                body: params
            })
            .then(res => res.text())
            .then(text => {
                document.getElementById('status').innerText = text === "Success" ? "Attendance recorded successfully!" : text;
                form.reset();
                calculateTotal(); // Recalculate total to zero after reset
            })
            .catch(err => {
                document.getElementById('status').innerText = "Error: " + err.message;
            });
        });