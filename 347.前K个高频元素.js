/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const fr = {};
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (fr[nums[i]]) {
            fr[nums[i]].value ++;
        } else {
            fr[nums[i]] = {
                key: nums[i],
                value: 1
            };
        }
    }
    const t = Object.values(fr).sort((a, b) => b.value - a.value).slice(0, k);
    t.map(i => {
        const { key: oKey, value } = i;
        res.push(oKey)
    })
    return res;
};