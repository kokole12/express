import { CustomApiError } from "../errors/custom-error.js"
export const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomApiError) {
        res.status(err.statuscode).json({msg: err.message})
    }
    return res.status(error.status).json({mgs: err.mgs})
}
