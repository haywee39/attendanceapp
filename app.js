


const form = document.getElementById("childForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbzZ_12Hzl_Tlyh6rG-2YaQSXQbLxlrKU4FdKtuNCd-LLl9motSFZ-vuVnhjSrLBiaI6/exec", {
    method: "POST",
    body: data,
  })
    .then((response) => {
      alert("✅ Data submitted successfully!");
      form.reset();
    })
    .catch((error) => {
      alert("❌ Error submitting data");
      console.error(error);
    });
});


// function doPost(e) {
//   Logger.log(JSON.stringify(e));  // Log all incoming data

//   const sheet = SpreadsheetApp.openById('15WRFKkFKnQMIBydjJrcup3ozFY2bzcFv').getSheetByName('CHILDREN LIST');

//   const name = e.parameter.name;
//   const gender = e.parameter.gender;
//   const address = e.parameter.address;
//   const phone = e.parameter.phone;
//   const dob = e.parameter.dob;

//   sheet.appendRow(["Test Name", "Male", "Test Address", "0000000000", "01/01/2020"]);


//   return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
// }
