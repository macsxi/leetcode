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
 * @return {TreeNode}
 */
// 层序遍历
var invertTree = function(root) {
    const t = [root];
    while (t.length) {
        const size = t.length;
        for (let i = 0; i < size; i++) {
            const m = t.shift();
            if (m) {
                const l = m.left;
                m.left = m.right;
                m.right = l;
                m.left && t.push(m.left);
                m.right && t.push(m.right);
            }
        }
    }
    return root;
};
// 递归，前序遍历
var invertTree = function(root) {
    if (!root) return root;
    const l = root.left;
    root.left = root.right;
    root.right = l;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

// 迭代，前序遍历
var invertTree = function(root) {
    const t = [root];
    while (t.length) {
        const m = t.pop();
        if (m) {
            const l = m.left;
            m.left = m.right;
            m.right = l;
            m.right && t.push(m.right);
            m.left && t.push(m.left);
        }
    }
    return root;
};