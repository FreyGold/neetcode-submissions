class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase()
        let string = "";
        for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // Check if the character is alphanumeric
            if ((char >= 'a' && char <= 'z') ||
                (char >= '0' && char <= '9')) {
                string += char;
            }
        }
        return string === string.split('').reverse().join('');
    }
}
