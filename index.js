const express =require('express');
const app = express();

app.use(express.static("public"))
const PORT= 3000

//const API_KEY='0814ee31c6694970a11a9d78991ebf47';
const API_KEY = 'db869835c76d48cd9fe154022263001'

app.get('/',(req,res)=>{
    res.render("index.ejs")
})
app.get("/weather", async (req, res) => {
//   const response = await fetch(
//     `https://newsapi.org/v2/everything?q=basketball&apiKey=${API_KEY}`
//   );
      
  const city = req.query.city || "Nigeria";

  const weather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  );


  const data = await weather.json();
  res.json(data);
});

app.listen (PORT,()=>{
    console.log(`server running on port${PORT}`);
    
})