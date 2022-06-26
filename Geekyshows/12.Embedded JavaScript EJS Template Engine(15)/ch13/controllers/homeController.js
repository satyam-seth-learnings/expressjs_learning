const homeController = (req, res) => {
    // res.render('index', { "name": "Sonam" });

    // const data = { "name": "Sonam" };
    // const data = { "name": "Sonam", "id": 10 };
    // const data = { "name": "Sonam", "id": 11 };
    // const data = { "name": "Sonam", "id": 21 };
    const data = {
        "name": "Sonam",
        "id": 21,
        "marks": [40, 60, 80, 70, 20]
    };
    res.render('index', data);
}

export { homeController };