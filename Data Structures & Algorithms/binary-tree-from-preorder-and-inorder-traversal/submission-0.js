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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(!preorder.length || !inorder.length) return null;
        let rootVal = preorder.shift()
        let mid = inorder.indexOf(rootVal)

        let node = new TreeNode(rootVal)

        let left = inorder.slice(0, mid)
        let right = inorder.slice(mid+1)
    
        node.left = this.buildTree(preorder, left)
        node.right = this.buildTree(preorder, right)
        
        return node
    }
}
