import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subCategoryModel = new Schema({
    cat_id: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        ref: 'Category'
    },
    name: {
        type: String,
        allowNull: false
    },
    description: {
        type: String,
        allowNull: false,
        unique: true
    },
    slug: {
        type: String,
        allowNull: false,
        unique: true
    },
    meta_title: {
        type: String,
        allowNull: false
    },
    meta_desc: {
        type: String,
        allowNull: false
    },
    meta_keyword: {
        type: String
    },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('sub_category', subCategoryModel);
