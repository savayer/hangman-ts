function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default function getRandomWord(words: string[]): string {
    const randomNumber: number = getRandom(0, words.length)
    return words[randomNumber] 
}