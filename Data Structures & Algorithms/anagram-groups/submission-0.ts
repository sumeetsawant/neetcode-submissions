class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const outputMap = {};
        for (let str of strs) {
            const counter = new Array(26).fill(0);
            for (let c of str) {
                counter[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = counter.join(',');
            if (!outputMap[key]) {
                outputMap[key] = [];
            }
            outputMap[key].push(str); 
        }
        return Object.values(outputMap);
    }
}
