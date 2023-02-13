const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
  {
    id: 0,
    modelo: "Chuteira de Trava",
    finality: "Jogar em Campo de grama",
    image: "https://static.lojadointer.com.br/produtos/chuteira-campo-adidas-predator-20-4-fg/06/NQQ-0245-006/NQQ-0245-006_zoom1.jpg?ts=1601482226",
    valor: 144.90
  },
  {
    id: 1,
    modelo: "Chuteira Society",
    finality: "Jogar em campo de grama sintetica",
    image: "https://static.lojafeiraodoscalcados.com.br/public/feiraodoscalcados/imagens/produtos/chuteira-society-cosmic-coral-preto-4808.jpg",
    valor: 139.90
  },
  {
    id: 2,
    modelo: "Chuteira Futsal",
    finality: "Jogar em quadra de futsal",
    image: "https://cdnv2.moovin.com.br/deckeronline/imagens/produtos/det/chuteira-futsal-runway-cano-baixo-macia-futebol-indoor-masculina--b66419095be6c9f6b1bc2c78bdc62b7d.jpg",
    valor: 129.90
  },
  {
    id: 3,
    modelo: "Tenis Basquete",
    finality: "Jogar basquetebal de quadra",
    image: "https://m.media-amazon.com/images/I/91J16Lcpa3L._AC_SX395_.jpg",
    valor: 259.90
  },
  {
    id: 4,
    modelo: "Tenis de corrida",
    finality: "Tenis mais leve, especifico para corrida e/ou caminhada",
    image: "https://cdnv2.moovin.com.br/deckeronline/imagens/produtos/det/tenis-corrida-olympikus-dinamo-running-masculino-981ccf311b9d23863b5228f87e39510d.jpg",
    valor: 119.90
  }
]

app.get('/', (req, res) => {
  res.render('dashboard', {products})
})

app.get('/:id', async (req, res) => {
  const id = await req.params.id
  const page = await products[id]

  res.render('product', {page})
})

app.listen(3000, () => {
  console.log('App rodando')
})