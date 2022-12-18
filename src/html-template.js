const manager = managerData => {
    return `
    <div class='card' style='max-width: 300px; margin: 20px 0 20px 30px; background-color: rgb(200, 198, 167);'>
    <div class='card-header' style='max-width: 300px; padding: 10px;'>
    <h2>${managerData.getName()}</h2>
    </div> 
    <div class="row card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${managerData.getID()}</li>
    <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
    <li class="list-group-item">Phone Number: <a href='tel:${managerData.getPhone()}'>${managerData.getPhone()}</a></li>
    </ul>
    <h3 style='padding-top: 10px;'>${managerData.getRole()}</h3>
    </div>
    </div>
    `
}

const engineer = engineerData => {
    return `
    <div class='card' style='max-width: 300px; margin: 20px 0 20px 30px; background-color: rgb(146, 150, 125);'>
    <div class='card-header' style='max-width: 300px; padding: 10px;'>
    <h2>${engineerData.getName()}</h2>
    </div> 
    <div class="row card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${engineerData.getID()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
    <li class="list-group-item">Github:
    <a href="https://www.github.com/${engineerData.getGitHub()}" target="_blank">www.github.com/${engineerData.getGitHub()}</a>
    </li>
    </ul>
    <h3 style='padding-top: 10px;'>${engineerData.getRole()}</h3>
    </div>
    </div>
    `
}

const intern = internData => {
    return `
    <div class='card' style='max-width: 300px; margin: 20px 0 20px 30px; background-color: rgb(110, 124, 124);'>
    <div class='card-header' style='max-width: 300px; padding: 10px;'>
    <h2>${internData.getName()}</h2>
    </div> 
    <div class="row card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${internData.getID()}</li>
    <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
    <li class="list-group-item">School: ${internData.getSchool()}</li>
    </ul>
    <h3 style='padding-top: 10px;'>${internData.getRole()}</h3>
    </div>
    </div>
    `
}

const employeesDiv = currentEmployees => {
let employeeHtml = ''

for (let i = 0; i < currentEmployees.length; i++ ) {
if (currentEmployees[i].getRole() === "Manager"){
employeeHtml = employeeHtml + manager(currentEmployees[i])
}
if (currentEmployees[i].getRole() === "Engineer"){
employeeHtml = employeeHtml + engineer(currentEmployees[i])
}
if (currentEmployees[i].getRole() === "Intern"){
employeeHtml = employeeHtml + intern(currentEmployees[i])
}
} return employeeHtml
}

const template = data => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Team Dashboard</title>
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi' crossorigin='anonymous'/>
    </head>
    <body style='background-color: rgb(67, 85, 96)'>
        <header class='d-flex justify-content-center p-2'>
            <h1>Team Dashboard</h1>
        </header>
        <main class='container-fluid'>
            <div class='row'>
            <div class="col-12">
            <div class='row justify-content-center'>
                ${employeesDiv(data)}
            </div>
            </div>
            </div>
        </main>
    </body>
    </html>
    `
}

module.exports = template;