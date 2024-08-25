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
var minDepth = function(root) {
    if (!root) return 0;
    const ld = minDepth(root.left);
    const rd = minDepth(root.right);
    if (root.left && root.right) {
        return Math.min(ld, rd) + 1;
    }
    return !root.left ? rd + 1 : ld + 1;
};

// 层序遍历解法
var minDepth = function(root) {
    if (!root) return 0;
    const t = [root];
    let res = 0;
    while(t.length) {
        const size = t.length;
        res++;
        for (let i = 0; i < size; i++) {
            const m = t.shift();
            m.left && t.push(m.left);
            m.right && t.push(m.right);
            if (!m.left && !m.right) {
                return res;
            }
        }
    }
};
