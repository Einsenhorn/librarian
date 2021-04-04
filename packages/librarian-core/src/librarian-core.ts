'use strict';

import Plugin from './plugin';

export default class LibrarianCore {
    plugins: Array<Plugin> = [];

    registerPlugin(plugin: Plugin) {
        if (this.plugins.filter((p) => p.name).length > 1) {
            throw new Error(`Plugin '${plugin.name}' has already been register.`);
        }

        this.plugins.push(plugin);
    }

    log(message: string) {
        this.plugins.forEach((p) => p.log(message));
    }
}
