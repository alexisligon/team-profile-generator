const generateManager = (manager) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
        />
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"
        ></script>
        <title>My Team</title>
    </head>
    <body>
        <h1>My Team</h1>

        <div class="row">

        <div class="col-sm-6">
            <div class="card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title text-center">${manager.getName()}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-center"><dt>${manager.getRole()}</dt></li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
            </div>
        </div>`

module.exports = {generateManager};

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