exports.loginRouter = async(req, res) => {    
    const connection = req.app.get('connection');
    var { password, email,role } = req.query;
    const [rows, fields] = await connection.query('SELECT * FROM faculty as f where f.email = ? and f.pass = ? and f.role = ?', [email, password,role]);
    
    res.status(200).json(rows[0]);
}