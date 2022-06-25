import { join } from 'path';

const homeContoller = (req, res) => {
    res.sendFile(join(process.cwd(), 'views', 'index.html'));
}

export { homeContoller };