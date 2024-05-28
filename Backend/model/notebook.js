import db from "../config/dbConnection";

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



export {  
     lookupNotebook, lookupNotebookByBrand, lookupNotebookByPriceRange, lookupNotebookByCategory
}; 