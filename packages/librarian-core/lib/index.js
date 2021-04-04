'use strict';

export default class LibrarianCore {
    constructor() {
        this.plugins = [];
    }

    registerPlugin(plugin) {
        this.plugins.push(plugin);
    }

    log(message) {
        this.plugins.forEach((plugin) => plugin.log(message));
    }
}
