var express = require('express');
var router = express.Router();

// Require controller modules
var book_controller = require('../controllers/bookController');
/// BOOK ROUTES ///

/* GET catalog home page. */
router.get('/', book_controller.index);

/* GET request for list of all Book items. */
router.get('/books', book_controller.book_list);

/* POST request for creating Book. */
router.post('/book', book_controller.book_create_post);

/* GET request for one book. */
router.get('/book/:id', book_controller.book_delete_get);

// POST request to 
router.post('/book/:id', book_controller.book_delete_post);

/* GET request to update Book. */
router.put('/book/:id', book_controller.book_update_get);

// POST request to update Book
router.post('/book/:id/update', book_controller.book_update_post);

/* GET request for one Book. */
router.get('/book/:id', book_controller.book_detail);




module.exports = router;