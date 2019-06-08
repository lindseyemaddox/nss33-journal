// code that is responsible for modifying the DOM

// let submit = document.getElementById("submit");

// submit.addEventListener("click", function () {
//   collectEntryItems();
// });

let output = document.getElementById("output");


getEntries().then(entries => {
  output.innerHTML = "";
  for (var i = 0; i < entries.length; i++) {
    let journalEntry = entries[i];
    output.innerHTML += entryComponent(journalEntry);
  }
});