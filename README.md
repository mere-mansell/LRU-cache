# LRU-cache

Please use any programming language you are comfortable with. You are welcome to use the internet to assist you. Focus on the task as a programming exercise rather than the outcome, and please do not spend more than 2 hours on the task. We will talk to you about your solution and your thought process during the follow-up interview.


Design and implement a data structure for Least Recently Used (LRU) cache. (https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU) It should support the following operations: 
get, put and delete

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.

put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting a new item.

delete(key) - Remove the value of the key if the key exists in the cache. Return the value if the key exists in the cache, otherwise return -1.
Please use basic data structures where possible. We are interested to see how you would implement the algorithm.

# Constraints:
1 <= capacity <= 1000
0 <= key <= 103
0 <= value <= 105

# Example:
LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
cache.delete(3);    // returns 3
cache.get(3);       // returns -1 (not found)