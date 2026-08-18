class Solution {
    public boolean isPalindrome(String s) {
        StringBuilder newStr = new StringBuilder();
        for (char ch : s.toCharArray()) {
            if (Character.isLetterOrDigit(ch)) {
                newStr.append(Character.toLowerCase(ch));
            }
        }
        return newStr.toString().equals(newStr.reverse().toString());
    }
}
