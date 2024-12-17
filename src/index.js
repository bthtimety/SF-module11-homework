// функция принимает слово и количество раз для его повторения

function repeatWord(word, count) {
    const words = [];
    for (let i = 1; i <= count; ++i) {
        words.push(word + i);
    }
    return words.join(", ");
}

module.exports = repeatWord;