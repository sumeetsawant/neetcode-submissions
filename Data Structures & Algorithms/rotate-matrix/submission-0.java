class Solution {
    public void rotate(int[][] matrix) {
        int len = matrix.length;
        int[][] output = new int[len][len];

        for (int i = 0; i < len; i++){
            for (int j = 0; j < len; j++) {
                output[j][len - 1 - i] = matrix[i][j];
            }
        }
        
        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len; j++) {
                matrix[i][j] = output[i][j];
            }
        }
        
    }
}
