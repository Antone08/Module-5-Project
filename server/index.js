const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
  const fortunes = ["Do you know that the busiest person has the largest amount of time?", "Don’t just think, act!", 
"Don’t let your limitations overshadow your talents.", "A hunch is creativity trying to tell you something.", 
"The best prediction of future is the past.",
];

let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];

 res.status(200).send(randomFortune)
});


app.get("/api/motivation", (req, res) => {
  const motivations = ["Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
  "It always seems impossible until it's done.", "A good head and a good heart are always a formidable combination.",
  "Celebrate Your Small Wins",
];

let randomIndex = Math.floor(Math.random() * motivations.length);
let randomMotivation = motivations[randomIndex];

 res.status(200).send(randomMotivation)
});


app.get("/api/motivation", (req, res) => {
  res.status(301).redirect("https://www.youtube.com/watch?v=VG2h3zlm-ng")
});





app.listen(4000, () => console.log("Server running on 4000"));
