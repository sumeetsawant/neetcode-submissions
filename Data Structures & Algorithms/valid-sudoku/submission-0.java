class Solution {
    public boolean isValidSudoku(char[][] board) {
        for (int i = 0; i < 9; i++) {
            Set<String> col = new HashSet<>();
            Set<String> row = new HashSet<>();
            Set<String> subBox = new HashSet<>();
            for (int j = 0; j < 9; j++) {
                // Check subBox
                int startRow = (i / 3) * 3;
                int startCol = (i % 3) * 3;

                int subBoxRow = startRow + j / 3;
                int subBoxCol = startCol + j % 3;

                if (board[subBoxRow][subBoxCol] != '.') {
                    if (!subBox.contains(board[subBoxRow][subBoxCol] + "")) {
                        subBox.add(board[subBoxRow][subBoxCol] + "");
                    } else {
                        return false;
                    }
                }

                // Check col
                if (board[j][i] != '.') {
                    if (!col.contains(board[j][i] + "")) {
                        col.add(board[j][i] + "");
                    }
                    else {
                        return false;
                    }
                }

                // Check row
                if (board[i][j] != '.') {
                    if (!row.contains(board[i][j] + "")) {
                        row.add(board[i][j] + "");
                    }
                    else {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}
