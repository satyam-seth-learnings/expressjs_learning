class StudentController {
    static set_cookie(req, res) {
        // res.cookie('username', 'Geekyshows');
        // res.cookie('cart', 5);
        res.cookie('username', 'Geekyshows', { maxAge: 30000 });
        res.send('Cookie Set...');
    }

    static get_cookie(req, res) {
        console.log(req.cookies);
        // console.log(req.cookies.username);
        // console.log(req.cookies.cart);
        res.send('Cookie Get...');
    }

    static delete_cookie(req, res) {
        res.clearCookie('username');
        res.send('Cookie Deleted...');
    }
}

export default StudentController;