class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sLen = s.length;
        const tLen = t.length;

        if (sLen !== tLen){
            return false;
        }
        
        const sMap = new Map<string, number>();

        for(let i=0; i<sLen; i++)
        {
            const sAlpha = s[i];
            const value = sMap.get(sAlpha);
            if(value !== undefined){
                sMap.set(sAlpha, value+1);
            }
            else
            {
                sMap.set(sAlpha, 1);
            }
        }

       for(let j=0; j<tLen; j++){
            const tAlpha = t[j];
            const value = sMap.get(tAlpha);
            if(value !== undefined && value > 0){
                sMap.set(tAlpha, value-1);
            }
            else
            {
                return false;
            }
        }

        return true;
    }
}
