export class Logger {
    static info(title, obj=undefined) {
        if(obj) {
            console.log(title, obj);
        } else {
            console.log(title);
        }
    }

    static warning(title, obj=undefined) {
        if(obj) {
            console.log(title, obj);
        } else {
            console.log(title);
        }
    }

    static error(title, obj=undefined) {
        if(obj) {
            console.log(title, obj);
        } else {
            console.log(title);
        }
    }
}