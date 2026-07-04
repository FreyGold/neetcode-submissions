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
     * @return {number[]}
     */
    rightSideView(root) {
        let result = []
        function bfs(root){
            if (!root) return [];
            
            let queue = [root]
            while(queue.length){
                let lvl = queue.length
                for(let i = 0; i<lvl; i++){
                    const node = queue.shift()
                    if(node.right)  queue.push(node.right);
                    if(node.left)   queue.push(node.left)
                    if(i==0){
                        result.push(node.val)
                    }
                }

            }
        }
        bfs(root)
        return result
    }
}
