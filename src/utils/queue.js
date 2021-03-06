let EventEmitter = require('events')
/**
 * 
 * 
 * @class Queue
 * @extends {EventEmitter}
 */
class Queue extends EventEmitter {
    /**
     * Creates a instance of a queue.
     * @memberof Queue 
     */
    constructor() {
        super();
        this.queue = [];
    }

    executeQueue() {
        let item = this.queue[0];

        if(!item) return;
        this.emit("execute", item);
    }

    /**
     * 
     * 
     * @param {any} item 
     * @memberof Queue
     */
    queueItem(item) {
        if (this.queue.length === 0) {
            this.queue.push(item);
            this.executeQueue();
        } else {
            this.queue.push(item);
        }
    }
}

module.exports = Queue;