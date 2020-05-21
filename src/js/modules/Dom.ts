class Dom {
    private parent: HTMLElement;
    private puzzle: HTMLElement;
    private alphabet: HTMLElement;
    private word: string;
    public game: boolean = true;

    constructor(selector: string) {
        this.parent = document.querySelector(selector)
        this.puzzle = this.parent.querySelector('.word')
        this.alphabet = this.parent.querySelector('.alphabet')
    }

    public seperateByWords(word: string): void {
        this.word = word
        word.split('').forEach(letter => {
            const span: HTMLSpanElement = document.createElement('span')
            if (letter === ' ') {
                span.classList.add('space')                
            } else {
                span.dataset.id = letter.charCodeAt(0).toString()
            }

            this.puzzle.appendChild(span)
        })
    }

    public generateAlphabet(): void {
        let letterStart: number = 'а'.charCodeAt(0)
        const letterEnd: number = 'я'.charCodeAt(0)

        for (; letterStart <= letterEnd; letterStart++) {
            const button: HTMLButtonElement = document.createElement('button')
            
            button.classList.add('letter')
            button.dataset.button_id = letterStart.toString()
            button.innerText = String.fromCharCode(letterStart).toUpperCase()
            
            button.addEventListener('click', () => {
                if (!this.game) return false;
                const id: string = button.dataset.button_id
                this.findLettersInGuessedWord(id)

                button.classList.add('disabled')
            })

            this.alphabet.appendChild(button)
        }
    }

    private findLettersInGuessedWord(id: string): void {
        const spans: NodeList = document.querySelectorAll(`[data-id="${id}"]`)
        if (spans.length > 0) {
            spans.forEach(function(letter: HTMLSpanElement) {
                const letterCode: string = letter.dataset.id
                letter.classList.add('guessed')
                letter.innerHTML = String.fromCharCode(+letterCode)
            })
            this.checkWin()
        } else {
            this.nextStepOfHanging()
        }
    }

    private nextStepOfHanging(): void {
        const img = document.querySelector('.hangman.active')
        const nextImg = img.nextElementSibling

        img.classList.remove('active')
        nextImg.classList.add('active')
        if (nextImg.classList.contains('hangman--7')) {
            this.game = false
            alert('Ты проиграл! Загаданное слово: ' + this.word)
        }
    }

    private checkWin(): void {
        if (document.querySelectorAll('.guessed').length === this.word.length) {
            this.game = false
            alert('Ты выиграл! Нажимай "Начать игру"')
        }
    }

    public init(): void {
        document.querySelector('.hangman.active').classList.remove('active')
        document.querySelector('.hangman--1').classList.add('active')
        this.alphabet.innerHTML = ''
        this.puzzle.innerHTML = ''
    }
    
}

const app = new Dom('#app')

export default app