const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
//dont forget to add the authenication for when the user is loggin
// const withAuth = require('')

module.exports = router;