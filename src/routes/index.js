const { Router } = require('express')
const router = Router();

//Routes
router.get('/test', (req, res) => {
    const data = {
        "name" : "Andres",
        "apellido": "Villamil"
    };
    const {name} = data
    console.log(name)
    res.json(data);
});

module.exports = router;