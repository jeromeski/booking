import { camelCase } from 'camel-case';

let instance = null;

export default class Cacher {
  cache = {};

  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  isValueCached(key) {
    return this.getCachedValue(key);
  }

  handleCacheValue(key, value) {
    this.cache[key] = value;
  }

  getCachedValue(key) {
    return this.cache[camelCase(key)];
  }
}
