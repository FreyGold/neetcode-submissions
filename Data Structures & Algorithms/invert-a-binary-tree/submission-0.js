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
     * @return {TreeNode}
     */

    inorder(n) {
        if (n) {
            console.log(n.val);
            this.inorder(n.left);
            this.inorder(n.right);
            let temp = n.left
            n.left = n.right
            n.right = temp            
        }

    }

    invertTree(root) {
        this.inorder(root)
        return root
    }
}
