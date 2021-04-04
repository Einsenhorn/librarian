'use strict';

import { Plugin } from '@librarian/core';

export default class LibrarianConsolePlugin implements Plugin {
    name = 'console';

    log(message: any) {
        console.log(message);
    }
}
