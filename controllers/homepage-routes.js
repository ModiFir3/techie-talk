const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models')

module.exports = router;

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'user_id',
                    'post_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            const post = dbPostData.map(post => post.get({ plain: true }));

            //how to preview a single post
            // res.render('homepage', dbPostData[0].get({ plain: true }));

            res.render('homepage', { post });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'user_id',
                    'post_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id ' });
                return;
            }
            const post = dbPostData.get({ plain: true });

            res.render('single-post', { post });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;
