class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l=0
        while l<len(numbers)-1:
            r = l+1
            while r<len(numbers):
                if numbers[r]+numbers[l] == target:
                    return [l+1,r+1]
                else:
                    r+=1
            l+=1
        