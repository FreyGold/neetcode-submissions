# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slowPointer=head
        fastPointer=head
        isCycle=False
        def traverse(node):
            nonlocal slowPointer,fastPointer,isCycle
            if not node.next or not node.next.next or not fastPointer.next.next:
                return
            slowPointer=slowPointer.next
            fastPointer=fastPointer.next.next
            print(slowPointer.val, fastPointer.val)
            if slowPointer==fastPointer:
                isCycle=True
                return
            traverse(node.next)
        traverse(head)
        return isCycle