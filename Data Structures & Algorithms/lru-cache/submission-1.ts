class LRUCache {

    private capacity: number;
    private cacheMap: Map<number, number> = new Map();

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.cacheMap.has(key))
        {
            return -1;
        }

        // re-insert to fix order 
        const value = this.cacheMap.get(key);
        this.cacheMap.delete(key);
        this.cacheMap.set(key, value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cacheMap.has(key)) {
            this.cacheMap.delete(key);
        }
        else if (this.cacheMap.size >= this.capacity) {
                const oldKey = this.cacheMap.keys().next().value;
                this.cacheMap.delete(oldKey);
        }
        this.cacheMap.set(key, value);
    }
}
