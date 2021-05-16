// Create a function called is Anagram, which given two string,
// returns true if they are anagrams of one another.
// For example: `Listen` is an anagram of `Silent`

function isAnagram(first, second) {

    // check for empty strings or different lengths
    if (!first || !second || first.length !== second.length) {
        return false;
    }

    // convert to lowercase
    const lowFirst = first.toLowerCase();
    const lowSecond = second.toLowerCase();

    // a word is not an anagram of itself
    if (lowFirst === lowSecond) {
        return false;
    }

    // transform strings into "sorted-character words"
    const sLowFirst = lowFirst.split('').sort().join('');
    const sLowSecond = lowSecond.split('').sort().join('');

    return sLowFirst == sLowSecond;
}

// isAnagram('Listen', 'Silent'); should return true