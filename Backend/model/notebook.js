import db from "../config/dbConnection.js";

const lookupNotebook = async (notebook_id) => {
    const notebook = await db.query(
        `SELECT * FROM notebook WHERE notebook_id = ?`,
        [notebook_id]
    );
    return (notebook["rows"]);
};

const lookupNotebookByBrand = async (brand) => {
    const notebook = await db.query(
        `SELECT * FROM notebook WHERE brand = ?`,
        [brand]
    );
    return (notebook["rows"]);
};

const lookupNotebookByPriceRange = async (minPrice,maxPrice) => {
    const notebook = await db.query(
        `SELECT * FROM notebook WHERE price >= ? AND price <= ?`,
        [minPrice,maxPrice]
    );
    return (notebook["rows"]);
};

const lookupNotebookByCategory = async (category) => {
    const notebook = await db.query(
        `SELECT * FROM notebook WHERE category = ?`,
        [category]
    );
    return (notebook["rows"]);
};

const lookupNotebookByCPU = async (cpu) => {
    const notebook = await db.query(
        `SELECT * FROM notebook WHERE cpu like ?`,
        [cpu]
    );
    return (notebook["rows"]);
}

const lookupNotebookByGPU = async (gpu) => {
    const notebook = await db.query(
        `SELECT * FROM notebook WHERE gpu like ?`,
        [gpu]
    );
    return (notebook["rows"]);
}

const lookupNotebookByram = async (ram) => {
    const notebook = await db.query(
        `SELECT * FROM notebook WHERE ram like ?`,
        [ram]
    );
    return (notebook["rows"]);
}

const sortBylowPrice = async () => {
    const notebook = await db.query(
        `SELECT * FROM notebook ORDER BY price ASC`
    );
    return (notebook["rows"]);
}

const sortByhighPrice = async () => {
    const notebook = await db.query(
        `SELECT * FROM notebook ORDER BY price DESC`
    );
    return (notebook["rows"]);
}

const sortByAtoZ = async () => {
    const notebook = await db.query(
        `SELECT * FROM notebook ORDER BY brand ASC`
    );
    return (notebook["rows"]);
}

const sortByZtoA = async () => {
    const notebook = await db.query(
        `SELECT * FROM notebook ORDER BY brand DESC`
    );
    return (notebook["rows"]);
}

const lookupTop5 = async (minPrice, maxPrice, limit = 5) => {
    const notebook = await db.query(
        `   SELECT *,
                (0.5 * performance_score + 0.5 * service_score) AS total_score
            FROM notebook 
            WHERE price BETWEEN ? AND ?
            ORDER BY total_score DESC
            LIMIT ?;
        `, [minPrice, maxPrice, limit]);
    return notebook["rows"];
}

export {
    lookupNotebook, lookupNotebookByBrand, lookupNotebookByCPU, lookupNotebookByCategory, lookupNotebookByGPU,
    lookupNotebookByPriceRange, lookupNotebookByram, lookupTop5, sortByAtoZ, sortByZtoA, sortByhighPrice, sortBylowPrice
};

