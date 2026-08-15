class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const size = nums.length;

        let prefix = [];
        prefix[0] = nums[0];
        for (let i = 1; i < size; i++) {
          prefix[i] = prefix[i-1] * nums[i];
        }

        let postFix = [];
        postFix[size-1] = nums[size-1];
        for (let j = size-2; j >= 0; j--) {
          postFix[j] = postFix[j+1] * nums[j];
        }

        let output = [];

        for (let k = 0; k < size; k++) {
          if (k == 0){
            output[k] = 1 * postFix[k+1];
          }
          else if (k == size-1){
            output[k] = prefix[k-1];
          }
          else {
            output[k] = prefix[k-1] * postFix[k+1];
          }
        }

        return output;

    }
}
