class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> store = new HashSet<>();
        for (int num : nums) {
            store.add(num);
        }

        int output = 0;

        for (int num : store) {
            if (!store.contains(num - 1)) {
                int currentNum = num;
                int currentStreak = 1;
                while (store.contains(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }
            output = Math.max(output, currentStreak);
            }
        }
        return output;
    }
}
