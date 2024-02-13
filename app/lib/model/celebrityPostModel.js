import mongoose from "mongoose";
const Schema = mongoose.Schema;

const celebPostModel = new Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false
    },
    title: {
        type: String,
        allowNull: false
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        ref: 'Category'
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        ref: 'Country',
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    email: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    phone: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    fax: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    established	: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    founder: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    prod_services: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    formerely: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    isin: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    industry: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    employees: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    owners: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    key_people: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    website: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    about: {
        type: String,
        allowNull: false,
        defaultValue: null
    },
    facebook: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    instagram: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    pinterest: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    linkedin: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    twitter: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    tumbler: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    youtube: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    wikipidea: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },

    slug: {
        type: String,
        allowNull: false,
        unique: true,
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    like: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    dislike: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: null
    },
    comment_count: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: false,
        defaultValue: 0
    },
    meta_tags: {
        type: String,
        allowNull: false,
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
    meta_key: {
        type: String,
        defaultValue: null
    },
    status: {
        type: Number,
        enum: [0, 1],
        default: 1 // 1 active, 0 deleted
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('celeb_post', celebPostModel);
