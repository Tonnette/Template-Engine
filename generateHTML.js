function generateHTML(data) {
    return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <title>PDF Exercise</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
  </head>
  
  <style>
      @page {
          margin: 0;
      }
  
      *,
      *::after,
      *::before {
          box-sizing: border-box;
      }
  
      html,
      body {
          padding: 0;
          margin: 0;
      }
  
      html,
      body,
      .wrapper {
          height: 100%;
      }
  
      .wrapper {
          background-color: white
  
          ;
          padding-top: 100px;
      }
  
      body {
          background-color: white;
          -webkit-print-color-adjust: exact !important;
          font-family: 'Cabin', sans-serif;
      }
  
      .main {
          background-color: #E9EDEE;
          height: auto;
          padding-top: 30px;
      }

      .whiteBox{
          background-color: white;
      }
  
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
          font-family: 'BioRhyme', serif;
          margin: 0;
      }
  
      h1 {
          font-size: 3em;
      }
  
      h2 {
          font-size: 2.5em;
      }
  
      h3 {
          font-size: 2em;
      }
  
      h4 {
          font-size: 1.5em;
      }
  
      h5 {
          font-size: 1.3em;
      }
  
      h6 {
          font-size: 1.2em;
      }
  
      .photo-header {
          position: relative;
          margin: 0 auto;
          margin-bottom: -50px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
  
          background-color: white
  
          ;
  
          color: black
  
          ;
          padding: 10px;
          width: 95%;
          border-radius: 6px;
      }
  
      .photo-header img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          object-fit: cover;
          margin-top: -75px;
          box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
          border: 6px solid black;
        
      }
  
      .photo-header h1,
      .photo-header h2 {
          width: 100%;
          text-align: center;
      }
  
      .photo-header h1 {
          margin-top: 10px;
      }
  
      .links-nav {
          width: 100%;
          text-align: center;
          padding: 20px 0;
          font-size: 1.1em;
      }
  
      .nav-link {
          display: inline-block;
          margin: 5px 10px;
      }
  
      .workExp-date {
          font-style: italic;
          font-size: .7em;
          text-align: right;
          margin-top: 10px;
      }
  
      .container {
          padding: 50px;
          padding-left: 100px;
          padding-right: 100px;
      }
  
      .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
          margin-bottom: 20px;
      }
  
      .card {
          padding: 20px;
          border-radius: 6px;
  text-align: center;
  width: 350px;
          background-color: white
  
          ;
  
          color: black
  
          ;
          margin: 20px;
      }
  
      .col {
          flex: 1;
          text-align: center;
      }
  
      a,
      a:hover {
          text-decoration: none;
          color: inherit;
          font-weight: bold;
      }
  
      @media print {
          body {
              zoom: .75;
          }
      }
  </style>
  <body>
    <div class="wrapper">      
        <div class="container main">
            <div class="row">
                <div>
                    <h3>${data.name}
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="card">
                    <h3>
                        Public Repositories: <br> ${data.id}
                    </h3>
                </div>
                <div class="card">
                    <h3>
                        Followers: <br> ${data.email}
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="card">
                    <h3>Following: <br> ${data.email}
                    </h3>
                </div>
                <div class="card">
                    <h3>GitHub Stars:<br>  ${data.email} 
                    </h3>
                </div>
            </div>
        </div>
    </div>
</body>
  </html>`
}

module.exports = generateHTML;