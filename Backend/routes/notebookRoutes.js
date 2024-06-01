import express from 'express';
import { lookupNotebook, lookupNotebookByBrand, lookupNotebookByCategory, lookupNotebookByPriceRange } from '../model/notebook.js';

const notebookRoutes = express.Router();

notebookRoutes.get('/displayNotebook', async (req, res) => {
    const { notebook_id } = req.query;
    try {
        const notebook = await lookupNotebook(notebook_id);
        res.send(notebook);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

notebookRoutes.get('/displayNotebookByBrand', async (req, res) => {
    const { brand } = req.query;
    try {
        const notebook = await lookupNotebookByBrand(brand);
        res.send(notebook);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
}); 

notebookRoutes.get('/displayNotebookByPriceRange', async (req, res) => {
    const { minPrice,maxPrice } = req.query;
    try {
        const notebook = await lookupNotebookByPriceRange(minPrice,maxPrice);
        res.send(notebook);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

notebookRoutes.get('/displayNotebookByCategory', async (req, res) => {
    const { category } = req.query;
    try {
        const notebook = await lookupNotebookByCategory(category);
        res.send(notebook);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

export default notebookRoutes;