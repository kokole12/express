import { Products } from "../modesls/products.js"

export const getAllProducts = async (req, res) => {
    const {feature, company, name, sort, fields, numberFilters} = req.query
    const queryObject = {}
    if (feature) {
        queryObject.feature = feature === 'true' ? true: false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = {$regex: name, $options: 'i'}
    }
    
    let result = Products.find(queryObject)
// sorting the products
    if (sort) {
        console.log(sort)
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    }
    else {
        result = result.sort('created_at')
    }
// getting specific fields only
    if (fields) {
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }
// implementing search by price
    if (numberFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte'
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numberFilters.replace(regEx, (match) => {
            `-${operatorMap[match]}-`
        })
        const options = ['price', 'rating']
        filters = filters.split(',').forEach(item => {
            const [field, operator, value] = item.split('-')
            if(options.includes(field)) {
                queryObject[field] = {[operator]: Number(value)}
            }
        });
        console.log(filters)
    }

// implementing the skip and limit
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip  = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    const products =  await result
    res.status(200).json({products, nbHits: products.length})
}

export const getAllProductsStatics = async (req, res) => {
    res.status(200).json({msg: "getting all products static"})
}

export const createProduct = async(req, res) => {
    const product = await Products.create(req.body)
    res.status(201).json({product})
}

