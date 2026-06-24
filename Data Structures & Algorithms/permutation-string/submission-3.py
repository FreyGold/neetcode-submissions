class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        s1=list(s1)
        s1Store=list(s1)
        l = r= 0
        while r < (len(s2)):
            if s2[r] in s1:
                s1.remove(s2[r])
                r+=1
                print(r, s1, s1Store)
                if len(s1)==0:
                    return True
            else:
                l+=1
                r=l
                s1=[*s1Store]
        return False