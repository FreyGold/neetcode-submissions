class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = []
        postfix = []
        product_exclude_self = []
        prefix_prd = 1
        postfix_prd = 1
        for num in nums:
            prefix_prd *= num
            prefix.append(prefix_prd)
        for num in nums[::-1]:
            postfix_prd *= num
            postfix.insert(0, postfix_prd)
        for i in range(len(nums)):
            pref = prefix[i - 1] if i > 0 else 1  # Safe access for i - 1
            post = postfix[i + 1] if i < len(prefix) - 1 else 1  # Safe access for i + 1
            print(i, pref, post)
            product_exclude_self.append(pref*post)
        return product_exclude_self