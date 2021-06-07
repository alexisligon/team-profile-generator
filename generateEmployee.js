const generateCard = (answer) =>

`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
  </head>
  <body>
    <h1>My Team</h1>

    <!-- Manager Card -->
    <div>
      <!--title section of card-->
      <div>
        <h2>${answer.name}</h2>
        <h3>Manager</h3>
      </div>

      <!--card info section-->
      <div>
        <ul>
          <li>ID:${answer.id}</li>
          <!--link to email-->
          <li>Email:${answer.email}</li>
          <li>Office Number:${answer.officeNumber}</li>
        </ul>
      </div>
    </div>

  </body>
</html>`

module.exports = {generateCard};

// console.log('Name: ', answer.name);
// console.log('Employee Id: ', answer.id);
// console.log('Email: ', answer.email);
// console.log('Role: ', answer.role);
// console.log('Office Number: ', answer.officeNumber);
// console.log('Github: ', answer.github);
// console.log('School: ', answer.school);


// <!-- Engineer Card -->
// <div>
//   <!--title section of card-->
//   <div>
//     <h2>Name</h2>
//     <h3>(icon)Engineer</h3>
//   </div>

//   <!--card info section-->
//   <div>
//     <ul>
//       <li>ID:</li>
//       <!--link to email-->
//       <li>Email:</li>
//       <!--link to github-->
//       <li>Github:</li>
//     </ul>
//   </div>
// </div>

// <!-- Intern Card -->
// <div>
//   <!--title section of card-->
//   <div>
//     <h2>Name</h2>
//     <h3>(icon)Intern</h3>
//   </div>

//   <!--card info section-->
//   <div>
//     <ul>
//       <li>ID:</li>
//       <!--link to email-->
//       <li>Email:</li>
//       <li>School:</li>
//     </ul>
//   </div>
// </div>