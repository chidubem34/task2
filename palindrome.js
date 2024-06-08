function palindrome(word) {
    if (typeof word !== 'string') {
        throw new Error("Input must be a word");
    }

    const normalizedWord = word.toLowerCase();
    const reversedWord = normalizedWord.split('').reverse().join('');
    if(normalizedWord === reversedWord) {
        console.log(`${normalizedWord} is a palindrome`)
    } else {
        console.log(`${normalizedWord} is not a palindrome`)
    }
}

palindrome('madam')