import mongoose from "mongoose";
const Schema = mongoose.Schema;

const stateModel = new Schema({
    country_id: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        ref: 'Country'
    },
    name: {
        type: String,
        allowNull: false
    },
    description: {
        type: String,
        allowNull: false,
        defaultValue: null
    },
    slug: {
        type: String,
        allowNull: false,
        unique: true,
        defaultValue: null
    },
    meta_title: {
        type: String,
        allowNull: false,
        defaultValue: null
    },
    meta_desc: {
        type: String,
        allowNull: false,
        defaultValue: null
    },
    meta_keyword: {
        type: String,
        defaultValue: null
    },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('state', stateModel);
