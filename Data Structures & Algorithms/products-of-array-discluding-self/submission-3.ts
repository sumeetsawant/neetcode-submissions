class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const size = nums.length;

        let prefix = [nums[0]];
        for (let i = 1; i < size; i++) {
          prefix[i] = prefix[i-1] * nums[i];
        }

        let postFix = [];
        postFix[size-1] = nums[size-1];
        for (let j = size-2; j >= 0; j--) {
          postFix[j] = postFix[j+1] * nums[j];
        }

        let output = [];
        output[0] = postFix[1];
        output[size-1] = prefix[size-2];

        for (let k = 1; k < size-1; k++) {
          output[k] = prefix[k-1] * postFix[k+1];
          
        }

        return output;

    }
}
