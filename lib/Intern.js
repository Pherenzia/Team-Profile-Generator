
function renderHtml(vehicles) {
    console.log("vehicles", vehicles);
    const cards = vehicles.map((vehicle) => renderCard(vehicle));
    console.log("cards", cards);
  
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    
        <style>
          .container,
          h1 {
            max-width: 960px;
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;
          }
    
          .card {
            flex: 1 0 33.33%;
          }
        </style>
      </head>
      <body>
        <h1>Listings</h1>
        <div class="container">
          ${cards.join("")}
        </div>
      </body>
    </html>
    `;
  }
  
  const html = renderHtml(listings);
  fs.writeFile("index.html", html, (err) => {
    if (err) {
      console.log(err);
      return;
      0;
    }
    console.log("Success!!");
  });