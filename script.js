//Generate Random Number
function generateRandomNumber(num) {
        // Gets # from 0 -> num - 1
        return Math.floor(Math.random() * num)
    }

  //Mood and Room output
    const moodRoom = {
        mood: ['happy', 'relaxed', 'sexy', 'cheerful', 'reflective', 'idyllic', 'whimsical', 'calm', 'peaceful'],
        room: ['hallway', 'kitchen', 'bathroom', 'living room', 'dining room', 'bedroom'],
    }

    //Scent Note Output
    const scentNote = {
        description: ['floating clouds of', 'whisps of', 'fuzzy notes of', 'grounding', 'earthy', 'fresh', 'warm', 'exotic traces of', 'sweet sting of'],
        notes: ['amber', 'bergamot', 'cedar', 'cinnamon', 'citrus', 'coffee', 'eucalyptus', 'grapefruit', 'grass', 'honey', 'jasmine', 'lavender', 'leather', 'lemon', 'mint', 'musk', 'patchouli', 'pine', 'rain', 'pumpkin', 'rose', 'sage', 'vanilla']
    }

    //Store the perfect candle in an array
    let perfectCandle = []

    // Add Mood and Room to Output
    for(let item in moodRoom) {
        
        let option = generateRandomNumber(moodRoom[item].length)
        
        // use object item to add 
        switch(item) {
            case 'mood':
                perfectCandle.push(`The perfect candle to create a "${moodRoom[item][option]}" ambiance in your `)
                break
            case 'room':
                perfectCandle.push(`${moodRoom[item][option]}" would smell like `)
                break
            default:
            perfectCandle.push('Opps, please try again.')
        }
    }

    // Create 3 scents and add to output

    for (let i = 0; i < 3, i++) {

            //add description
            let dOption = generateRandomNumber(scentNote[description].length)
            perfectCandle.push(`${scentNote[description][dOption]}`)
            
            //add note
            let nOption = generateRandomNumber(scentNote[notes].length)
            perfectCandle.push(`${scentNote[notes][nOption]}`)

            switch(i) {
                case '0':
                    perfectCandle.push(`, `)
                    break
                case '1':
                    perfectCandle.push(`, and `)
                    break
                case '2':
                    perfectCandle.push(`.`)
                    break
                default:
                    perfectCandle.push('.')
            }     
        }
    }

