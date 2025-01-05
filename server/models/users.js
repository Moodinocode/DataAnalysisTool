import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import bcrypt from 'bcrypt';

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 50]
        }
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'Users',
    timestamps: true
});

// Function to register a new user
const registerUser = async (username, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({
        username,
        email,
        password: hashedPassword
    });
};

const userExists = async (email) => {
    const user = await User.findOne({ where: { email } });
    return !!user;
};

const getUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

export { User, registerUser, userExists, getUserByEmail };

module.exports = {
    User,
    registerUser,
    userExists,
    getUserByEmail
};
