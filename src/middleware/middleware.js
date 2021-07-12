const Joi = require('joi');

const storeSchema = Joi.object({
	name: Joi.string().required(),
}).required()
const productSchema = Joi.object({
	name: Joi.string().required(),
	price: Joi.number().required().min(0),
	stock: Joi.number().required().min(0),
}).required()


const userSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required().email({ tlds: { allow: false } }),
}).required()

const cartSchema = Joi.object({
	quantity: Joi.number().required().min(1),
}).required()



module.exports.validateStore = (req, res, next) => {
	const { error } = storeSchema.validate(req.body);
	if (error) {
		const msg = error.details.map(el => el.message).join(',')
		res.status(400).json(msg);
	} else {
		next();
	}
}

module.exports.validateProduct = (req, res, next) => {
	const { error } = productSchema.validate(req.body);
	if (error) {
		const msg = error.details.map(el => el.message).join(',')
		res.status(400).json(msg);
	} else {
		next();
	}
}
module.exports.validateUser = (req, res, next) => {
	const { error } = userSchema.validate(req.body);
	if (error) {
		const msg = error.details.map(el => el.message).join(',')
		res.status(400).json(msg);
	} else {
		next();
	}
}

module.exports.validateCart = (req, res, next) => {
	const { error } = cartSchema.validate(req.body);
	if (error) {
		const msg = error.details.map(el => el.message).join(',')
		res.status(400).json(msg);
	} else {
		next();
	}
}