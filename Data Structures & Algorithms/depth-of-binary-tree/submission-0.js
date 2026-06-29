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
     * @return {number}
     */
          
    maxDepth(root) {
        let depth = 0;
        let curr = 0
        function max(n, m){
            return Math.max(n,m)
        }
        function traverse(node){
            if(!node)return;
            curr+=1;
            traverse(node.left);
            traverse(node.right);
            depth = max(depth, curr);
            curr-=1;
        }   
        traverse(root)
        return depth
    }
}
