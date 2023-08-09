export class CustomApiError extends Error {
    constructor(message, statuscode) {
        super(message)
        this.statuscode = statuscode;
        
    }
}

 export const createCustomError = (msg, statuscode) => {
    return new CustomApiError(message, statuscode)
}
