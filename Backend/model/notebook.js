import db from "../config/dbConnection.js";

const lookupNotebook = async (notebook_id) => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook WHERE notebook_id = ?',
        values: [notebook_id],
        rowsAsArray: true,
    });
    return results;
};

const lookupNotebookByBrand = async (brand) => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook WHERE brand = ?',
        values: [brand],
        rowsAsArray: true,
    });
    return results;
};

const lookupNotebookByPriceRange = async (minPrice, maxPrice) => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook WHERE price >= ? AND price <= ?',
        values: [minPrice, maxPrice],
        rowsAsArray: true,
    });
    return results;
};

const lookupNotebookByCategory = async (category) => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook WHERE category = ?',
        values: [category],
        rowsAsArray: true,
    });
    return results;
};

const lookupNotebookByCPU = async (cpu) => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook WHERE cpu LIKE ?',
        values: [cpu],
        rowsAsArray: true,
    });
    return results;
};

const lookupNotebookByGPU = async (gpu) => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook WHERE gpu LIKE ?',
        values: [gpu],
        rowsAsArray: true,
    });
    return results;
};

const lookupNotebookByram = async (ram) => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook WHERE ram LIKE ?',
        values: [ram],
        rowsAsArray: true,
    });
    return results;
};

const sortBylowPrice = async () => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook ORDER BY price ASC',
        rowsAsArray: true,
    });
    return results;
};

const sortByhighPrice = async () => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook ORDER BY price DESC',
        rowsAsArray: true,
    });
    return results;
};

const sortByAtoZ = async () => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook ORDER BY brand ASC',
        rowsAsArray: true,
    });
    return results;
};

const sortByZtoA = async () => {
    const [results, fields] = await db.query({
        sql: 'SELECT * FROM notebook ORDER BY brand DESC',
        rowsAsArray: true,
    });
    return results;
};

const lookupTop5 = async (minPrice, maxPrice, limit = 5) => {
    const [results, fields] = await db.query({
        sql: `
            SELECT *,
            (0.5 * performance_score + 0.5 * service_score) AS total_score
            FROM notebook 
            WHERE price BETWEEN ? AND ?
            ORDER BY total_score DESC
            LIMIT ?;
        `,
        values: [minPrice, maxPrice, limit],
        rowsAsArray: true,
    });
    return results;
};

export {
    lookupNotebook, lookupNotebookByBrand, lookupNotebookByCPU, lookupNotebookByCategory, lookupNotebookByGPU,
    lookupNotebookByPriceRange, lookupNotebookByram, lookupTop5, sortByAtoZ, sortByZtoA, sortByhighPrice, sortBylowPrice
};

