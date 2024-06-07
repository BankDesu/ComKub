import db from "../config/dbConnection.js";

const lookupNotebook = async (notebook_id) => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook WHERE notebook_id = ?',
        [notebook_id]
    );
    return results;
};

const lookupNotebookByBrand = async (brand) => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook WHERE brand = ?',
        [brand]
    );
    return results;
};

const lookupNotebookByPriceRange = async (minPrice, maxPrice) => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook WHERE price >= ? AND price <= ?',
        [minPrice, maxPrice]
    );
    return results;
};

const lookupNotebookByCategory = async (category) => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook WHERE category = ?',
        [category]
    );
    return results;
};

const lookupNotebookByCPU = async (cpu) => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook WHERE cpu LIKE ?',
        [cpu]
    );
    return results;
};

const lookupNotebookByGPU = async (gpu) => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook WHERE gpu LIKE ?',
        [gpu]
    );
    return results;
};

const lookupNotebookByram = async (ram) => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook WHERE ram LIKE ?',
        [ram]
    );
    return results;
};

const sortBylowPrice = async () => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook ORDER BY price ASC'
    );
    return results;
};

const sortByhighPrice = async () => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook ORDER BY price DESC'
    );
    return results;
};

const sortByAtoZ = async () => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook ORDER BY brand ASC'
    );
    return results;
};

const sortByZtoA = async () => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook ORDER BY brand DESC'
    );
    return results;
};

const lookupTop5 = async (minPrice, maxPrice, limit = 5) => {
    const [results, fields] = await db.promise().query(
        `
        SELECT *,
        (0.5 * performance_score + 0.5 * service_score) AS total_score
        FROM notebook 
        WHERE price BETWEEN ? AND ?
        ORDER BY total_score DESC
        LIMIT ?;
    `
    , [minPrice, maxPrice, limit]);
    return results;
};

export {
    lookupNotebook, lookupNotebookByBrand, lookupNotebookByCPU, lookupNotebookByCategory, lookupNotebookByGPU,
    lookupNotebookByPriceRange, lookupNotebookByram, lookupTop5, sortByAtoZ, sortByZtoA, sortByhighPrice, sortBylowPrice
};

