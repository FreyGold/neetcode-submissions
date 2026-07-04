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
    goodNodes(root) {
        let highest = [root.val]
        let count = 0;
        function traverse(node){
            if(!node) return
            let currentHighest = false
            console.log(node.val, highest[highest.length-1], count)
            if(node.val > highest[highest.length-1]){
                currentHighest = true;
                highest.push(node.val)
            }   
            if(node.val >= highest[highest.length-1]){
                count++;
            }
            console.log(count, "------")
            traverse(node.left)
            traverse(node.right)
            if(currentHighest){
                highest.pop()
            }
        }
        traverse(root);
        return count
    }
}
