class Dom {
    private parent: HTMLElement;
    private puzzle: HTMLElement;
    private alphabet: HTMLElement;
    
    constructor(selector: string) {
        this.parent = document.querySelector(selector)
        this.puzzle = this.parent.querySelector('.word')
        this.alphabet = this.parent.querySelector('.alphabet')
    }

    public seperateByWords(word: string): void {
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
            button.innerText = String.fromCharCode(letterStart).toUpperCase()
            
            this.alphabet.appendChild(button)
        }
    }

    public clear(): void {
        this.alphabet.innerHTML = ''
        this.puzzle.innerHTML = ''
    }
    
}

const app = new Dom('#app')

export default app