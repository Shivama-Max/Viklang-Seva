const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minLength: 6,
        validate(value) {
            if (!validator.isAlphanumeric(value)) {
                throw new Error("Enter a valid username");
            }
        },
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Enter a valid email address");
            }
        },
    },
    contact: {
        type: Number,
        minLength: 10,
        maxLength: 10,
    },
    aboutYou: {
        type: String,
    },
    domain: {
        type: String,
    },
    exp: {
        type: Number,
    },
    linUrl: {
        type: String,
    },
    portLink: {
        type: String,
    },
    skills: [{
        type: String,
    }],
    password: {
        type: String,
        required: true,
        trim: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        },
    }, ],
});

userSchema.virtual("jobs", {
    ref: "Job",
    localField: "_id",
    foreignField: "postedBy",
});

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({
        _id: user._id.toString()
    }, 'mike');
    user.tokens = user.tokens.concat({
        token
    });
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({
        username
    });
    if (!user) {
        throw new Error("Invalid Username!");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid Password!");
    }
    return user;
};

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;