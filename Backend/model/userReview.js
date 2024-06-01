import db from "../config/dbConnection.js";

const newReview = async (userid,notebook_id,review_title,perfromance_score,service_score) => {
    const newReview = await db.query(
        'INSERT INTO review (userid,notebook_id,review_title,perfromance_score,service_score) VALUES (?,?,?,?,?) RETURNING *', 
        [userid,notebook_id,review_title,perfromance_score,service_score]
    );
    return (newReview["row"][0]);
}

const deleteReview = async (reviewid) => {
    const review = await db.query(
        'DELETE FROM review WHERE reviewid = ?', 
        [reviewid]
    );
    return (deletedReview["row"][0]);
};

const updateReview = async (reviewid,notebook_id,review_title,perfromance_score,service_score) => {
    const review = await db.query(
        'UPDATE review SET notebook_id = ?, review_title = ?, perfromance_score = ?, service_score = ? WHERE reviewid = ? RETURNING *', 
        [notebook_id,review_title,perfromance_score,service_score,reviewid]
    );
    return (updatedReview["row"][0]);
}

const lookupReview = async (reviewid) => {
    const review = await db.query(
        `SELECT * FROM review WHERE reviewid = ?`,
        [reviewid]
    );
    return (review["rows"]);
};

const lookupReviewByNotebook = async (notebook_id) => {
    const review = await db.query(
        `SELECT * FROM review WHERE notebook_id = ?`,
        [notebook_id]
    );
    return (review["rows"]);
};

export {
    deleteReview, lookupReview, lookupReviewByNotebook, newReview, updateReview
};

