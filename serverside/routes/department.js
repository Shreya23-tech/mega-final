const { Router } = require('express');
const { getAllDepartment, addDepartment, searchDepartment, countDepartment, getADepartment, getADepartmentData,getADepartmentStudent, getADepartmentCourse, searchACourse } = require('../controllers/department');

const router = Router();

router.get('/', getAllDepartment);
router.get('/get/:dname', getADepartment);
router.get('/get/:dname/data', getADepartmentData);
router.get('/get/:dname/course', getADepartmentCourse);
router.get('/get/:dname/student', getADepartmentStudent);
router.get('/get/:dname/course/search', searchACourse);
router.post('/add', addDepartment);
//router.post('/add/:dname', addStudent);
router.get('/search', searchDepartment);
router.get('/count', countDepartment);

module.exports = router;