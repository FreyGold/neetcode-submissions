/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let maxdiff=0;
        function traverse(node){
            if(!node) return 1;

            let left = traverse(node.left)
            let right = traverse(node.right)

            maxdiff = Math.max(maxdiff, Math.abs(left - right))
            
            return 1+Math.max(left,right)
        }
        traverse(root)
        return !(maxdiff > 1)

    }
}
