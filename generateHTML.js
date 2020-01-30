function generateHTML() {
    return `<!doctype html>
    <html lang="en">
    
    <head>
       <meta charset="UTF-8" />
       <title>Employee Template Generator</title>
    
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
       <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
    </head>
    
    <header class="jumbotron" style="text-align: center;">
       <h1 class="display-3" id="weatherTitle"><strong>Employee Data</strong></h1>
    </header>
    
    <style>
       .card {
          margin: 0 auto;
          float: none;
          margin-bottom: 10px;
       }
    
       .managerCard {
          width: 60%;
    
       }
    
       .line {
          border-bottom: solid 1px grey;
          padding-bottom: 10px;
       }
    
       .engineerCard,
       .internCard {
          display: inline-block !important;
          margin-left: 100px;
       }
    
       .footer {
          background-color: rgb(246, 248, 248);
          text-align: center;
          border-bottom: solid 1px lightgrey;
       }
    </style>
    
    <body>`
}

module.exports = generateHTML;