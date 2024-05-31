import express from 'express';
import logger from '../config/logger';
import {lookupNotebook, lookupNotebookByBrand, lookupNotebookByPriceRange, lookupNotebookByCategory } from '../model/notebook';

const router = express.Router();

router.get('/displayNotebook', async (req, res) => {
    const { notebook_id } = req.query;
    try {
        const notebook = await lookupNotebook(notebook_id);
        res.send(notebook);
    } catch (err) {
        logger.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/displayNotebookByBrand', async (req, res) => {
    const { brand } = req.query;
    try {
        const notebook = await lookupNotebookByBrand(brand);
        res.send(notebook);
    } catch (err) {
        logger.error(err);
        res.status(500).send('Internal Server Error');
    }
}); 

router.get('/displayNotebookByPriceRange', async (req, res) => {
    const { minPrice,maxPrice } = req.query;
    try {
        const notebook = await lookupNotebookByPriceRange(minPrice,maxPrice);
        res.send(notebook);
    } catch (err) {
        logger.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/displayNotebookByCategory', async (req, res) => {
    const { category } = req.query;
    try {
        const notebook = await lookupNotebookByCategory(category);
        res.send(notebook);
    } catch (err) {
        logger.error(err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;