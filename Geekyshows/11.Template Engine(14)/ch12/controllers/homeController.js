const homeController = (req, res) => {
    // res.send('Home Page Hai Ye');
    // res.render('index.ejs');
    // res.render('index');
    res.render('index', { 'name': 'Sonam' });
}

export { homeController };