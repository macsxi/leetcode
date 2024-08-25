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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = [];
    const t = [];
    const f = n => {
        t.push(n.val);
        if (!n.left && !n.right) {
            res.push(t.join('->'));
            return;
        }
        if (n.left) {
            f(n.left);
            t.pop();
        }
        if (n.right) {
            f(n.right);
            t.pop();
        }
    }
    f(root);
    return res;
};

// 迭代法
var binaryTreePaths = function(root) {
    const t = [];
    const p = [];
    const res = [];
    if (root) {
        t.push(root);
        p.push(root.val + '');
    }
    while(t.length) {
        const node = t.pop();
        const path = p.pop();
        if (!node.left && !node.right) {
            res.push(path);
        }
        if (node.right) {
            t.push(node.right);
            p.push(path + '->' + node.right.val);
        }
        if (node.left) {
            t.push(node.left);
            p.push(path + '->' + node.left.val);
        }
    }
    return res;
};