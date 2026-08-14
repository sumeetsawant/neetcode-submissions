class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {   
        let map = new Map<number, number>();
        let conter = 0;
        while(nums.length >= conter){
            if (map.has(nums[conter])){
                return true;
            }
            map.set(nums[conter], conter);
            conter++;
        }  

        return false;
    }
}
