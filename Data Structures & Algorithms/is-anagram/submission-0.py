class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s1 = []
        t1 = []
        for char in s:
            s1.append(char)
        for char in t:
            t1.append(char)
        s1.sort()
        t1.sort()
        if(s1 == t1):
            return True
        else: 
            return False