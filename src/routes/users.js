import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
});

export default router;

