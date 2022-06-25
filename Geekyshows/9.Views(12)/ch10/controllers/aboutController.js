import { join } from 'path';

const aboutController = (req, res) => {
    // res.send('About Page');
    // res.send('<h1>About Page</h1>');
    // res.sendFile('C:\\Users\\LENOVO\\OneDrive\\Programs\\Learning\\expressjs_learning\\Geekyshows\\9.Views(12)\\ch10\\views\\about.html');
    console.log(join(process.cwd(), 'views', 'about.html'));
    res.sendFile(join(process.cwd(), 'views', 'about.html'))
}

export { aboutController };