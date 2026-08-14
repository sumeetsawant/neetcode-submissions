class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int[] output = new int[2];
        for (int i = 0; i < nums.length; i++){
            Integer diff = target - nums[i];
            Integer diffExists = map.get(diff);
            if (diffExists != null){
                output[0] = diffExists;
                output[1] = i;
            }
            map.put(nums[i], i);
        }

        return output;
    }
}
