// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
// Dependencies
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Pokegem = require('./models/pokegem.js');
const session = require('express-session')
const SESSION_SECRET = process.env.SESSION_SECRET
console.log("Here is the session secret")
console.log(SESSION_SECRET)
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))

// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
//Body parser: Add JSON data from request to the request object
app.use(express.json())
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');


// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//API ROUTE

// New
app.get('/pokegems/new', (req, res) => {
	res.render('new.ejs');
});

app.get('/pokegems/:id', async (req, res) => {
  try {
    const pokegem = await Pokegem.findById(req.params.id);
    if (!pokegem) {
      return res.status(404).send('Pokegem not found');
    }
    res.render('show.ejs', { pokegem });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});


app.delete('/pokegems/:id', async (req, res) => {
  try {
    const deletedPokegem = await Pokegem.findByIdAndDelete(req.params.id);
    if (!deletedPokegem) {
      return res.status(404).send('Pokegem not found');
    }
    res.redirect('/pokegems');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});



// app.get('/pokegems', async (req, res) => {
//     try {
//       const pokegems = await Pokegem.find({});
//       res.render('index.ejs', { pokegems });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Server error');
//     }
//   });
// app.get('/pokegems', async (req, res) => {
//   const pokegems = await Pokegem.find().sort({ series: 'asc' });
//   res.render('index', { pokegems });
// });

app.get('/pokegems', async (req, res) => {
  try {
    const pokegems = await Pokegem.find().sort({ series: 'asc' });
    res.render('index', { pokegems });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

  
  app.post('/pokegems', (req, res) => {
    Pokegem.create(req.body, (error, createdPokegem) => {
      if (error) {
        console.error(error);
        res.status(500).send('Server error');
      } else {
        res.status(201).json(createdPokegem);
      }
    });
  });
  


  app.get('/pokegems/seed', async (req, res) => {
    Pokegem.create([
            {
                series: "Scarlet & Violet Series",
                name: "Scarlet & Violet",
                cardImg: "not available",
                price: "Not Available",
                img: "https://i.imgur.com/ZW5lSi8.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Crown Zenith",
                cardImg: "https://i.imgur.com/YI7Nrrm.png",
                price: "Not Available",
                img: "https://i.imgur.com/tboOotG.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Silver Tempest",
                cardImg: "https://i.imgur.com/DuKklrD.png",
                price: "Not Available",
                img: "https://i.imgur.com/e6XwQHb.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Lost Origin",
                cardImg: "https://i.imgur.com/ALxN4jP.png",
                price: "Not Available",
                img: "https://i.imgur.com/S1fNCZR.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Pokemon GO",
                cardImg: "https://i.imgur.com/l3xIXos.png",
                price: "Not Available",
                img: "https://i.imgur.com/IG3mCHN.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Astral Radiance",
                cardImg: "https://i.imgur.com/1zrIivc.png",
                price: "Not Available",
                img: "https://i.imgur.com/MogfMuC.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Brilliant Stars",
                cardImg: "https://i.imgur.com/OSZ5pWh.png",
                price: "Not Available",
                img: "https://i.imgur.com/bHuCu0V.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Fusion Strike",
                cardImg: "https://i.imgur.com/xDD0PaS.png",
                price: "Not Available",
                img: "https://i.imgur.com/WBK59BC.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Celebrations",
                cardImg: "Not Available",
                price: "Not Available",
                img: "https://i.imgur.com/eOD96Dn.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Evolving Skies",
                cardImg: "https://i.imgur.com/A0IUMIM.png",
                price: "Not Available",
                img: "https://i.imgur.com/WXrVlqb.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Chilling Reign",
                cardImg: "Not Available",
                price: "Not Available",
                img: "https://i.imgur.com/qeWiMTX.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Battle Styles",
                card:"Not Available",
                price: "Not Available",
                img: "https://i.imgur.com/2incM3f.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Shining Fates",
                cardImg: "Not Available",
                price: "Not Available",
                img: "https://i.imgur.com/UDdZrPz.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Vivid Voltage",
                cardImg: "https://i.imgur.com/Scdsy3o.png",
                price: "Not Available",
                img: "https://i.imgur.com/dL4gSEZ.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Champion's Path",
                cardImg: "Not Available",
                price: "Not Available",
                img: "https://i.imgur.com/qsN7Jzm.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Darkness Ablaze",
                cardImg: "Not Available",
                price: "Not Available",
                img: "https://i.imgur.com/ooDUbTG.png"
            },
            {
                series: "Swoard & Shield Series",
                name: "Rebel Clash",
                cardImg: "Not Available",
                price: "Not Available",
                img: "https://i.imgur.com/yveDKct.png"
            },
            {
                series: "Base Set Series",
                name: "Base Set",
                cardImg: "https://images.pokemontcg.io/base1/4.png",
                price: "Not Available",
                img: "https://images.pokemontcg.io/base1/symbol.png"
            },
           

        ], (err, data) =>{
            res.redirect('/pokegems')
                    })
                })

  
// Listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));
