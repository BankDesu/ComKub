import db from "../config/dbConnection.js";

const newReview = async (userid, notebook_id, review_title, performance_score, service_score) => {
    const [result, fields] = await db.promise().query(
        'INSERT INTO review (userid, notebook_id, review_title, performance_score, service_score) VALUES (?, ?, ?, ?, ?) RETURNING *',
        [userid, notebook_id, review_title, performance_score, service_score]
    );
    return result[0];
};

const deleteReview = async (reviewid) => {
    const [result, fields] = await db.promise().query(
        'DELETE FROM review WHERE reviewid = ?',
        [reviewid]
    );
    return result.affectedRows > 0;
};

const updateReview = async (reviewid, notebook_id, review_title, performance_score, service_score) => {
    const [result, fields] = await db.promise().query(
        'UPDATE review SET notebook_id = ?, review_title = ?, performance_score = ?, service_score = ? WHERE reviewid = ? RETURNING *',
        [notebook_id, review_title, performance_score, service_score, reviewid]
    );
    return result[0];
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

