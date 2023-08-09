export const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            return fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}
