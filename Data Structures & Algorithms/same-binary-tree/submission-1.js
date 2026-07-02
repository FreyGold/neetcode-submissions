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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let isSame = true;

        function traverse(p, q){
            if (!p && !q) return;  
            if (!p || !q) {isSame = false; return;  }

            
            traverse(p.left, q.left)
            traverse(p.right, q.right)
            if(p.val != q.val){
                isSame = false;
                return; 
            }
            return;
        }
        traverse(p,q)
        return isSame
    }
}
