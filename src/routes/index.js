
const newsRouter = require('./news.js')
export const route = (app) => {
    
app.get('/', (req, res) => {
  res.render('home');
})

// app.get('/news', (req, res) => {
//   res.render('news');
// })

// app.post('/news', (req, res) => {
//   console.log("req", req.body)
// })

app.get('/search', (req, res) => {
    res.render('search');
  })
  
  app.post('/search', (req, res) => {
    res.send('search');
  })
}

