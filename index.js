const userForm = document.getElementById("userForm");
const outputDiv = document.getElementById("output");
const outputName = document.getElementById("outputName");
const outputEmail = document.getElementById("outputEmail");
const outputPhoneNumber = document.getElementById("outputPhoneNumber")

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;

  // Validate email using a simple regex pattern
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email))
  {
    alert("Please enter a valid email address.");
    return;
  }

  // Display user information
  outputName.textContent = name;
  outputEmail.textContent = email;
  outputPhoneNumber.textContent = number;
  // outputDiv.style.display = "block";




//   <!DOCTYPE html>
// <html>
// <head>
//     <title>User Input Form</title>
// </head>
// <body>
//     <h2>User Input Form</h2>
//     <form id="userForm">
//         <label for="name">Name:</label>
//         <input type="text" id="name" required><br><br>

//         <label for="email">Email:</label>
//         <input type="email" id="email" required><br><br>

//         <input type="submit" value="Submit">
//     </form>

//     <div id="output" style="display: none;">
//         <h3>User Information:</h3>
//         <p><strong>Name:</strong> <span id="outputName"></span></p>
//         <p><strong>Email:</strong> <span id="outputEmail"></span></p>
//     </div>

//     <script>
//         const userForm = document.getElementById("userForm");
//         const outputDiv = document.getElementById("output");
//         const outputName = document.getElementById("outputName");
//         const outputEmail = document.getElementById("outputEmail");

//         userForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             // Get user input
//             const name = document.getElementById("name").value;
//             const email = document.getElementById("email").value;

//             // Validate email using a simple regex pattern
//             const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//             if (!emailPattern.test(email)) {
//                 alert("Please enter a valid email address.");
//                 return;
//             }

//             // Display user information
//             outputName.textContent = name;
//             outputEmail.textContent = email;
//             outputDiv.style.display = "block";
//         });
//     </script>
// </body>
// </html>
