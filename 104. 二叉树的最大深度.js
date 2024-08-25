/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 层序遍历解法
var maxDepth = function(root) {
    if (!root) return 0;
    const t = [root];
    let res = 0;
    while(t.length) {
        const size = t.length;
        for (let i = 0; i < size; i++) {
            const m = t.shift();
            if (m) {
                m.left && t.push(m.left);
                m.right && t.push(m.right);
            }
        }
        res++;
    }
    return res;
};