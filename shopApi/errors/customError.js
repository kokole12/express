export class CustomErrorApi extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode =  statusCode;
    }
}

export const customError = (message, statusCode) => {
    return new CustomErrorApi(message, statusCode)
}
