const voiture = ["mercedes", "peugeot"]

const voitures2 = voiture.map( // map -> cela va modifier directement l'élément --> créer une nouvelle liste à partir d'une nouvelle liste
  v => "voiture : " + v
)

console.log(voitures2)