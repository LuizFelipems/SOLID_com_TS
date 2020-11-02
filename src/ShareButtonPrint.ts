import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {
    constructor(clazz: string) {
        super(clazz);
    }
    
    createAction() {
        return () => window.print();
    }
}