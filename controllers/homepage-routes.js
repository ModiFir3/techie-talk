const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models')

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;

// router.get('/', (req, res) => {
//     Post.findAll({
//         attributes: [
//             'id',
//             'title',
//             'content',
//             'created_at'
//         ],
//         include: [
//             {
//                 model: Comment,
//                 attributes: [
//                     'id',
//                     'comment_text',
//                     'user_id',
//                     'post_id'
//                 ],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//         .then(dbPostData => {
//             const post = dbPostData.map(post => post.get({ plain: true }));

//             //here might lie the issue
//             res.render('homepage', {
//                 post,
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         })
// })

module.exports = router;
