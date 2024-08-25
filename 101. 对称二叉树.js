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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    const f = (l, r) => {
        if (!l && r) {
            return false;
        } else if (l && !r) {
            return false;
        } else if (!l && !r) {
            return true;
        } else if (l.val !== r.val) {
            return false;
        }
        const outside = f(l.left, r.right);
        const inside = f(l.right, r.left);
        return outside && inside;
    }
    return f(root.left, root.right);
};
// 迭代解法
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    const t = [];
    t.push(root.left, root.right);
    while(t.length) {
        const r = t.pop();
        const l = t.pop();
        if (!r && !l) {
            continue;
        } else if (!r || !l || r.val !== l.val) {
            return false;
        }
        t.push(l.left);
        t.push(r.right);
        t.push(l.right);
        t.push(r.left);
    }
    return true;
};