import db from "../config/dbConnection.js";

const lookupNotebook = async (notebook_id) => {
    const [results, fields] = await db.promise().query(
      'SELECT * FROM notebook WHERE notebook_id = ?',
      [notebook_id]
    );
    return results;
  };
  
  const lookupNotebookall = async (filters) => {
    const { brand, category, cpu, gpu, ram, minPrice, maxPrice } = filters;
  
    let query = 'SELECT * FROM notebook WHERE 1=1';
    let params = [];
  
    if (brand) {
      query += ' AND brand IN (?)';
      params.push(brand.split(','));
    }
    if (category) {
      query += ' AND category IN (?)';
      params.push(category.split(','));
    }
    if (cpu) {
      query += ' AND cpu IN (?)';
      params.push(cpu.split(','));
    }
    if (gpu) {
      query += ' AND gpu IN (?)';
      params.push(gpu.split(','));
    }
    if (ram) {
      query += ' AND ram IN (?)';
      params.push(ram.split(','));
    }
    if (minPrice) {
      query += ' AND price >= ?';
      params.push(Number(minPrice));
    }
    if (maxPrice) {
      query += ' AND price <= ?';
      params.push(Number(maxPrice));
    }
  
    const [results, fields] = await db.promise().query(query, params);
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
        'SELECT * FROM notebook WHERE cpu LIKE ?%',
        [cpu]
    );
    return results;
};

const lookupNotebookByGPU = async (gpu) => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook WHERE gpu LIKE ?%',
        [gpu]
    );
    return results;
};

const lookupNotebookByram = async (ram) => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook WHERE ram LIKE ?%',
        [ram]
    );
    return results;
};

const lookupTop4PriceEqualto20k = async (minPrice = 0, maxPrice = 20000, limit = 4) => {
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

const lookupTop4PriceBetweenmor20kto50k = async (minPrice = 20001, maxPrice = 50000, limit = 4) => {
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

const lookupTop4PriceBetweenmor50kto100k = async (minPrice = 50001, maxPrice = 100000, limit = 4) => {
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

const lookupTop4PriceMorethan100k = async (minPrice = 100001, limit = 4) => {
    const [results, fields] = await db.promise().query(
        `
        SELECT *,
        (0.5 * performance_score + 0.5 * service_score) AS total_score
        FROM notebook 
        WHERE price >= ?
        ORDER BY total_score DESC
        LIMIT ?;
    `
    , [minPrice, limit]);
    return results;
};

const updatenotebookscore = async (notebook_id, avgPerformanceScore, avgServiceScore) => {
    const [results, fields] = await db.promise().query(
        'UPDATE notebook SET performance_score = ?, service_score = ? WHERE notebook_id = ?',
        [avgPerformanceScore, avgServiceScore, notebook_id]
    );
    return results;
}

const searchNotebookByname = async (name) => {
    const [results, fields] = await db.promise().query(
        'SELECT * FROM notebook WHERE notebook_name LIKE ?',
        [name]
    );
    return results;
};

export {
    lookupNotebook, lookupNotebookByBrand, lookupNotebookByCPU,
    lookupNotebookByCategory, lookupNotebookByGPU, lookupNotebookByPriceRange,
    lookupNotebookByram, lookupNotebookall, lookupTop4PriceBetweenmor20kto50k, lookupTop4PriceBetweenmor50kto100k, lookupTop4PriceEqualto20k, lookupTop4PriceMorethan100k, searchNotebookByname,
    updatenotebookscore
};

