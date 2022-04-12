//Generate Random Number
function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

  //Possible Outputs

  const randomOutput = {
      mood: ['happy', 'relaxed', 'sexy', 'cheerful', 'reflective', 'idyllic', 'whimsical', 'calm', 'peaceful'],
      room: ['hallway', 'kitchen', 'bathroom', 'living room', 'dining room', 'bedroom'],
      description: ['floating clouds of', 'whisps of', 'fuzzy notes of', 'grounding', 'earthy', 'fresh', 'warm', 'exotic traces of', 'sweet sting of'],
      notes: ['amber', 'bergamot', 'cedar', 'cinnamon', 'citrus', 'coffee', 'eucalyptus', 'grapefruit', 'grass', 'honey', 'jasmine', 'lavender', 'leather', 'lemon', 'mint', 'musk', 'patchouli', 'pine', 'rain', 'pumpkin', 'rose', 'sage', 'vanilla']
  }