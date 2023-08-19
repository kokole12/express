import { CustomApiError } from "../error/custom-error.js";

export const errorHandler = async (err, req, res, next) => {
    if (err instanceof CustomApiError) {
        crossOriginIsolated.log(err)
    }

    next()
}
