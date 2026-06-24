class Solution:
    def maxArea(self, heights: List[int]) -> int:
        # l - r * min(l,r)
        maxi = 0
        l = 0
        r = len(heights)-1
        while l < r:
            max_height = (r - l) * min(heights[l],heights[r])
            maxi = max(max_height, maxi)
            if heights[r] > heights[l]:
                l+=1
            elif heights[r] < heights[l]:
                r-=1
            else:
                if heights[r-1]-heights[r] > heights[l+1]-heights[l]:
                    r-=1
                else:
                    l+=1
        return maxi
