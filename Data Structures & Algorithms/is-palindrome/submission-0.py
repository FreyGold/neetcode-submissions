class Solution:
    def isPalindrome(self, s: str) -> bool:
        chars = []
        for char in s: 
            print(char)
            if char.isalnum():
                chars.append(char.lower())
        print(chars)
        return chars == chars[::-1]