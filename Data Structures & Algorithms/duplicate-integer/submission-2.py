class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        map = defaultdict(int)
        for num in nums: 
            map[num] += 1
            if map[num] > 1:
                return True
        return False