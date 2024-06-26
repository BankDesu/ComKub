import db from "../config/dbConnection.js";

const newReview = async (userid, notebook_id, performance_score, service_score) => {
    const query = 'INSERT INTO review (userid, notebook_id, performance_score, service_score) VALUES (?, ?, ?, ?)';
    const [result] = await db.promise().query(query, [userid, notebook_id, performance_score, service_score]);
    return result;
};

const deleteReview = async (reviewid) => {
    const [result, fields] = await db.promise().query(
        'DELETE FROM review WHERE reviewid = ?',
        [reviewid]
    );
    return result.affectedRows > 0;
};

const updateReview = async (reviewid, notebook_id, performance_score, service_score) => {
    const [result, fields] = await db.promise().query(
        'UPDATE review SET notebook_id = ?, performance_score = ?, service_score = ? WHERE reviewid = ?',
        [notebook_id, performance_score, service_score, reviewid]
    );
    return result;
};

const lookupReview = async (reviewid) => {
    const [result, fields] = await db.promise().query(
        'SELECT * FROM review WHERE reviewid = ?',
        [reviewid]
    );
    return result;
};

const lookupReviewByNotebook = async (notebook_id) => {
    const [result, fields] = await db.promise().query(
        'SELECT * FROM review WHERE notebook_id = ?',
        [notebook_id]
    );
    return result;
};

export {
    deleteReview, lookupReview, lookupReviewByNotebook, newReview, updateReview
};

