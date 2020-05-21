import * as data from '../../db.json'
import getRandomWord from './modules/getRandomWord'
import app from './modules/Dom'

document.querySelector('#start_game').addEventListener('click', () => {
    const word: string = getRandomWord(data.words)
    
    app.clear()
    app.seperateByWords(word)
    app.generateAlphabet()
})