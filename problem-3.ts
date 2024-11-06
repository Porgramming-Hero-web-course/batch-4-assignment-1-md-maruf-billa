{
    const countWordOccurrences = (sentence: string, search: string): number => {
        let wordCount: number = 0;
        const spitedSentence = sentence.toLowerCase().replace(/[.,!?]/g, "").split(" ");
        const searchWord = search.toLowerCase();

        for (let i = 0; i < spitedSentence.length; i++) {
            if (spitedSentence[i] === searchWord) {
                wordCount++;
            }
        }
        return wordCount;
    }

}
