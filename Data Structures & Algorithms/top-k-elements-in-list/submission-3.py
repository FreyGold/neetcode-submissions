class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = defaultdict(int)
        output = []
        for num in nums: 
            map[num]+=1
        key_with_max_value = max(map, key=map.get)
        max_value = map[key_with_max_value]

        for num in map.keys():
            if map[num] == max_value:
                output.append(num)
        
        while k > len(output):
            max_value-=1
            for num in map.keys():
                if map[num] == max_value:
                    output.append(num)
        
            

        return output