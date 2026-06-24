class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        graph = {}
        for index, value in enumerate(nums):
            complement = target - value
            if complement in graph.keys():
                return[graph[complement], index]
            graph[value] = index
            
            