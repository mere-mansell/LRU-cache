// using class as a template for JS objects
// always requires a constructor ()
// taking capacity as an argument which sets max size of cache
// using a Map objects bc it maintains order in which key-value pairs are inserted

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }

  // Get method:
  // we want to check if the key exists
  // if it exists: (get) the value and rearrange to MRU
  // remove (delete) element from Map and add (set) it in again at new MRU position

  get(key) {
    if (this.map.has(key)) {
      let value = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, value)
      return value
    } else {
      return -1
    }
  }

  // Put method:
  // get the value
  // check capacity
  // if at capacity, remove LRU element

  put(key, value) {
    if (this.get(key) === -1) {
      // when we call the .get we are calling the above get method which will rearrange order of use
      if (this.capacity === this.map.size) {
        // if at capacity we want to remove the LRU element which is first element
        // create for loop to iterate over map like array etc.
        // the first element [0] we want to delete
        // iterating over map does it an array with two elements; [0] = key, [1] = value
        for (let keyValue of this.map) {
          this.map.delete(keyValue[0])
          break
          // breaking out of the for loop after the first element [0]
          // removes LRU and creates empty space
          // remembering that Map keeps track of insertion
        }
      }
    }
    this.map.set(key, value)
  }
}
