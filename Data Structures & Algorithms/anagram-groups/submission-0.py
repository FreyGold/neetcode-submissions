class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}
        for str in strs:
            ordered_str = ''.join(sorted(str))
            if ordered_str not in map.keys():
                map[ordered_str] = []
                map[ordered_str].append(str)
            else:
                map[ordered_str].append(str)
        return list(map.values())
