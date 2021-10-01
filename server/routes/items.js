const router = require('express').Router();
const controller = require('./../controllers');

// 전체 아이템 내역을 가져오는 라우팅
router.get('/', controller.items.get);

module.exports = router;
