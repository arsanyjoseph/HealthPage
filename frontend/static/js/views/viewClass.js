export default class Abstract {
    constructor() {

    }

    changeTitle(title) {
        document.title = `Be Health\ ${title}`;
    }

    async renderHTML() {
        return "";
    }
}