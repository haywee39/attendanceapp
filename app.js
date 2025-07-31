document.getElementById('childForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const params = new URLSearchParams(formData);

      fetch("https://script.google.com/macros/s/AKfycbyyXUwbfagTAeYBCrv4MidX8u6C0cY6PlLljhcVWWPWpyXeinBQ28cfuXRYP_Sl3IaBZA/exec", {
        method: "POST",
        body: params
      })
      .then(res => res.text())
      .then(text => {
        document.getElementById('status').innerText = text === "Success" ? "Child registered successfully!" : text;
        form.reset();
      })
      .catch(err => {
        document.getElementById('status').innerText = "Error: " + err.message;
      });
    });

