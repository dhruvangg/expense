const db = require("../models")

exports.createCategory = async (req, res) => {
    const { name, icon } = req.body;
    try {
        const category = await db.Category.create({
            name,
            icon
        })
        res.status(201).json({ "status": "ok", "message": "Created Category", data: category })
    } catch (error) {
        res.status(400).json({ "status": "error", "message": error })
    }
}

exports.getCategoies = async (req, res) => {
    const { limit = 2, offset = 0 } = req.query;
    console.log('getCatgeory')
    try {
        const total = await db.Category.count()
        const categories = await db.Category.findAll({ limit, offset })
        res.status(200).json({ "status": "ok", "message": "Get categories", categories, total, limit, "page": offset + 1, total_pages: Math.ceil(total / limit) })
    } catch (error) {
        res.status(400).json({ "status": "error", "message": error })
    }
}