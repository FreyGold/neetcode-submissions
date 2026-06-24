class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        res = [0]*len(temperatures)
        for i, num in enumerate(temperatures):
            while stack and num > stack[-1][0]:
                t, ind = stack.pop()
                res[ind] = i-ind
            stack.append((num, i))
        return res        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        # l, r = 0, 1
        # i = 0
        # res = [0] * len(temperatures)
        # while l<r and r<len(temperatures):
        #     if temperatures[r] > temperatures[l]:
        #         res[i]=(r-l)
        #         print(temperatures[l],temperatures[r])
        #         l += 1
        #         r = l+1
        #         i+=1
        #     else:
        #         r+=1
        #         if(r == len(temperatures)-1) and temperatures[r] < temperatures[l]:
        #             l+=1
        #             i+=1
        #             r-=1
        # return res
