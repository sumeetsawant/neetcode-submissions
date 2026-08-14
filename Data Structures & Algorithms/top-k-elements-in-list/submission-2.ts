class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap: Map<number, number> = new Map();
        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        const sortedKeys = Array.from(frequencyMap.keys()).sort((a, b) => (frequencyMap.get(b) || 0) - (frequencyMap.get(a) || 0));
        return sortedKeys.slice(0, k);
    }
}
