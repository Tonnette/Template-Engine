const createManagerHTML = (manager) => {

    return `<div class="card text-center managerCard">
    <div class="card-header" style="background-color: rgb(91, 201, 238);">
       <h1>${manager.getRole()}</h1>
    </div>
    <div class="card-body">
       <p class="card-text">
          <div class="line"><strong>Name:</strong> ${manager.name}</div> <br>
          <div class="line"> <strong>ID:</strong>${manager.id} </div> <br>
          <div class="line"><strong>Email:</strong> ${manager.email}</div> <br>
          <div><strong>Office Number:</strong>${manager.officeNumber} </div>
       </p>
    </div>
    </div>`

}



const createEngineerHTML = (engineer) => {
return `<div class="card internCard" style="width: 30rem;">
<div class="card-header" style="background-color: rgb(91, 238, 182);">
   <h1>${engineer.getRole()}</h1></div> <div class="card-body">
   <p class="card-text">
      <div class="line"><strong>Name:</strong> ${engineer.name}</div> <br>
      <div class="line"> <strong>ID:</strong> ${engineer.id}</div> <br>
      <div class="line"><strong>Email:</strong> ${engineer.email}</div> <br>
      <div><strong>Github Name:</strong>  ${engineer.github}</div></p></div> </div>`

}

const createInternHTML = (intern) => {
return `<div class="card engineerCard" style="width: 30rem;">
<div class="card-header" style="background-color: rgb(184, 91, 238);">
   <h1>${intern.getRole()}</h1> </div><div class="card-body">
   <p class="card-text">
      <div class="line"><strong>Name:</strong> ${intern.name}</div> <br>
      <div class="line"> <strong>ID:</strong> ${intern.id}</div> <br>
      <div class="line"><strong>Email:</strong> ${intern.email}</div> <br>
      <div><strong>School:</strong> ${intern.school}</div></p></div></div>`


}

module.exports = {
   intern: createInternHTML,
   manager: createManagerHTML,
   engineer: createEngineerHTML,

}
