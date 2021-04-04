'use strict';

export default class LibrarianCore {
    plugins: Array<any>;

    constructor() {
        this.plugins = [];
    }

    registerPlugin(plugin: any) {
        this.plugins.push(plugin);
    }

    log(message: string) {
        this.plugins.forEach((plugin) => plugin.log(message));
    }
}
