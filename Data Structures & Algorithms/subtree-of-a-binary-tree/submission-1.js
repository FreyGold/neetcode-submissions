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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

    function isSameTree(p, q){
        if(!p && !q) return true;
        if(!p || !q) return false;
        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

    function traverse(node){
        if(!node) return false;
        if(isSameTree(node, subRoot)) return true;
        return traverse(node.left) || traverse(node.right);
    }

    return traverse(root)
}
}
