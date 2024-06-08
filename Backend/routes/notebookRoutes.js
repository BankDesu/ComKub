import express from "express";
import {
  lookupNotebook,
  lookupNotebookByBrand,
  lookupNotebookByCPU,
  lookupNotebookByCategory,
  lookupNotebookByGPU,
  lookupNotebookByPriceRange,
  lookupNotebookByram,
  lookupNotebookall,
  lookupTop5,
  searchNotebookByname,
  sortByAtoZ,
  sortByZtoA,
  sortByhighPrice,
  sortBylowPrice,
  updatenotebookscore,
} from "../model/notebook.js";

const notebookRoutes = express.Router();

notebookRoutes.get("/displayNotebook", async (req, res) => {
  const {} = req.query;
  try {
    const notebook = await lookupNotebookall();
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/lookupNotebook/:notebook_id", async (req, res) => {
  const { notebook_id } = req.params;
  try {
    const notebook = await lookupNotebook(notebook_id);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/displayNotebookByBrand", async (req, res) => {
  const { brand } = req.query;
  try {
    const notebook = await lookupNotebookByBrand(brand);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/displayNotebookByPriceRange", async (req, res) => {
  const { minPrice, maxPrice } = req.query;
  try {
    const notebook = await lookupNotebookByPriceRange(minPrice, maxPrice);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/displayNotebookByCategory", async (req, res) => {
  const { category } = req.query;
  try {
    const notebook = await lookupNotebookByCategory(category);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/displayNotebookByCPU", async (req, res) => {
  const { cpu } = req.query;
  try {
    const notebook = await lookupNotebookByCPU(cpu);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/displayNotebookByGPU", async (req, res) => {
  const { gpu } = req.query;
  try {
    const notebook = await lookupNotebookByGPU(gpu);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/displayNotebookByRam", async (req, res) => {
  const { ram } = req.query;
  try {
    const notebook = await lookupNotebookByram(ram);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/sortBylowPrice", async (req, res) => {
  try {
    const notebook = await sortBylowPrice();
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/sortByhighPrice", async (req, res) => {
  try {
    const notebook = await sortByhighPrice();
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/sortByAtoZ", async (req, res) => {
  try {
    const notebook = await sortByAtoZ();
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/sortByZtoA", async (req, res) => {
  try {
    const notebook = await sortByZtoA();
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/displayTop5", async (req, res) => {
  try {
    const notebook = await lookupTop5();
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/updateScores/:notebookId", async (req, res) => {
  const notebookId = req.params.notebookId;
  try {
    // ดึงค่าเฉลี่ยของ service score และ performance score จากฐานข้อมูล
    const [result] = await db
      .promise()
      .query(
        "SELECT AVG(service_score) AS avg_service_score, AVG(performance_score) AS avg_performance_score FROM userReview"
      );
    const avgServiceScore = result.avg_service_score;
    const avgPerformanceScore = result.avg_performance_score;

    // อัปเดตค่าในฐานข้อมูล notebook
    const updateResult = await updatenotebookscore(
      notebookId,
      avgServiceScore,
      avgPerformanceScore
    );

    res.json(updateResult);
  } catch (error) {
    console.error("Error updating scores:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update scores" });
  }
});

notebookRoutes.get("/serch", async (req, res) => {
  const { name } = req.query;
  try {
    const notebook = await searchNotebookByname(name);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

export default notebookRoutes;
