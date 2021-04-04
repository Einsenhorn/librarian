import { Plugin } from '@librarian/core';

export default class LibrarianConsolePlugin implements Plugin {
    name = 'console';

    log(message: string) {
        console.log(message);
    }

    log(message: string, test: boolean) {
        console.log(`${message}-${test}`);
    }
}
