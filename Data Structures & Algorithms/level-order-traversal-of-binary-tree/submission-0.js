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
     * @return {number[][]}
     */
    
    levelOrder(root) {
        let result = []
        let curr = []
        function bfs(root){
            if (!root) return [];
            
            const queue = [root]; 

            while (queue.length) {
                let lvlLength = queue.length
                for(let i = 0; i<lvlLength; i++){
                    const node = queue.shift()
                    curr.push(node.val)
                    if (node.left)  queue.push(node.left)
                    if (node.right) queue.push(node.right)
                }
                result.push([...curr])
                curr = []
            }
        }
        bfs(root)
        return result
    }
}
