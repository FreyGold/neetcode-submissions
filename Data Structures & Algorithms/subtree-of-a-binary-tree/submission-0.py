# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        stack2=[]
        def dfs(node, stack):
            if not node:
                stack.append(None)
                return
            stack.append(node.val)
            dfs(node.left, stack)
            dfs(node.right, stack)
        dfs(subRoot, stack2)
        def testEveryNode(node):
            newStack = []
            if not node:
                return False
            dfs(node, newStack)
            if newStack==stack2:
                return True
            return testEveryNode(node.left) or testEveryNode(node.right)
        return testEveryNode(root)

        

        
        

           