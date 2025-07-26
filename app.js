 const form = document.getElementById("childForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);

    fetch("YOUR_GOOGLE_SCRIPT_URL", {
      method: "POST",
      body: data
    }).then(response => {
      alert("Data submitted successfully!");
      form.reset();
    }).catch(error => {
      alert("Error submitting data");
    });
  });