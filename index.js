const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

app
  .use(express.static(path.join(__dirname, 'dist/spa')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// app.use(function(req, res, next) {
//   //res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Access-Control-Expose-Headers', 'Content-Length');
//   res.header('Access-Control-Allow-Headers', '*');
//   if (req.method === 'OPTIONS') {
//     return res.send(200);
//   } else {
//     return next();
//   }
// });