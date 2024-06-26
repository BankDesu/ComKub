import express from "express";
import db from "../config/dbConnection.js";
import {
  lookupNotebook, lookupNotebookByBrand, lookupNotebookByCPU,
  lookupNotebookByCategory, lookupNotebookByGPU, lookupNotebookByPriceRange,
  lookupNotebookByram, lookupNotebookall,
  lookupTop5PriceBetweenmor20kto50k,
  lookupTop5PriceBetweenmor50kto100k,
  lookupTop5PriceEqualto20k,
  lookupTop5PriceMorethan100k,
  searchNotebookByname,
  updatenotebookscore
} from "../model/notebook.js";


const notebookRoutes = express.Router();

notebookRoutes.get("/displayNotebook", async (req, res) => {
  const { brand, category, cpu, gpu, ram, minPrice, maxPrice } = req.query;
  try {
    const filters = { brand, category, cpu, gpu, ram, minPrice, maxPrice };
    const notebook = await lookupNotebookall(filters);
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

notebookRoutes.get("/Brand", async (req, res) => {
  const { brand } = req.query;
  try {
    const notebook = await lookupNotebookByBrand(brand);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/Price", async (req, res) => {
  const { minPrice, maxPrice } = req.query;
  try {
    const notebook = await lookupNotebookByPriceRange(minPrice, maxPrice);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/Category", async (req, res) => {
  const { category } = req.query;
  try {
    const notebook = await lookupNotebookByCategory(category);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/cpu", async (req, res) => {
  const { cpu } = req.query;
  try {
    const notebook = await lookupNotebookByCPU(cpu);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/gpu", async (req, res) => {
  const { gpu } = req.query;
  try {
    const notebook = await lookupNotebookByGPU(gpu);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/ram", async (req, res) => {
  const { ram } = req.query;
  try {
    const notebook = await lookupNotebookByram(ram);
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});


notebookRoutes.get("/displayTop5PriceEqualto20k", async (req, res) => {
  try {
    const notebook = await lookupTop5PriceEqualto20k();
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/displayTop5PriceBetweenmor20kto50k", async (req, res) => {
  try {
    const notebook = await lookupTop5PriceBetweenmor20kto50k();
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/displayTop5PriceBetweenmor50kto100k", async (req, res) => {
  try {
    const notebook = await lookupTop5PriceBetweenmor50kto100k();
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/displayTop5PriceMorethan100k", async (req, res) => {
  try {
    const notebook = await lookupTop5PriceMorethan100k();
    res.send(notebook);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

notebookRoutes.get("/updateScores/:notebookId", async (req, res) => {
  const { notebookId } = req.params;
  try {
    // Calculate the average scores from the reviews
    const [result] = await db.promise().query(
      "SELECT AVG(performance_score) AS avg_performance_score, AVG(service_score) AS avg_service_score FROM review WHERE notebook_id = ?",
      [notebookId]
    );
    
    const avgPerformanceScore = result[0].avg_performance_score;
    const avgServiceScore = result[0].avg_service_score;

    // Update the notebook scores
    await updatenotebookscore(notebookId, avgPerformanceScore, avgServiceScore);

    res.status(200).json({ message: "Scores updated successfully" });
  } catch (error) {
    console.error("Error updating scores:", error);
    res.status(500).json({ success: false, message: "Failed to update scores" });
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
