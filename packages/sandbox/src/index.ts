import Librarian from '@librarian/core';
import LibrarianPluginConsole from '@librarian/plugin-console';

const l = new Librarian();

l.registerPlugin(new LibrarianPluginConsole());
l.log("Hello world");
