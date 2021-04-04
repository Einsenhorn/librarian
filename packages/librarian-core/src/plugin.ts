export default interface Plugin {
    name: string;

    log(message: string) : void;
    log(message: string, test: boolean) : void;
}
