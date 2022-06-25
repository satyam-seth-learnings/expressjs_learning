import { join } from 'path';

const homeController = (req, res) => {
    // res.send('Home Page');
    // res.send('<h1>Home Page</h1>');
    // res.sendFile('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\expressjs_learning\\Geekyshows\\9.Views(12)\\ch10\\views\\index.html');
    console.log(join(process.cwd(), 'views', 'index.html'));
    res.sendFile(join(process.cwd(), 'views', 'index.html'))
}

export { homeController };