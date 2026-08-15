class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(str => str.length + "#_" + str).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
      const result: string[] = [];
      let i = 0;
      while (i < str.length) {
        const lengthEndIndex = str.indexOf('#_', i);
        const length = parseInt(str.substring(i, lengthEndIndex));
        const startIndex = lengthEndIndex + 2;
        const endIndex = startIndex + length;
        result.push(str.substring(startIndex, endIndex));
        i = endIndex;
      }
      return result;
    }
}
