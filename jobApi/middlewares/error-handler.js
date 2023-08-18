import { CustomeErrorApi } from "../errors/customer-error.js";
import {StatusCodes} from 'http-status-codes';

export const customErrorHandler = (err, req, res, next) => {
    if (err instanceof CustomeErrorApi) {
        return res.status(err.status_code).json({mgs: err.mgs})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
}
