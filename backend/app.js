// File: index.js
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

// GET /notes (fetch all notes)
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await prisma.note.findMany();
    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /notes (create a new note)
app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    const newNote = await prisma.note.create({
      data: { title, content },
    });
    // console.log('Note created:', newNote);
    res.status(201).json(newNote);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT /notes/:id (update a note)
app.put("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  console.log("Received update request for note:", { id, title, content }); //debug log

  if (!title && !content) {
    console.log("Update rejected: Missing title and content");
    return res
      .status(400)
      .json({
        error: "At least one field (title or content) is required for update",
      });
  }

  const noteId = parseInt(id, 10);
  if (isNaN(noteId)) {
    console.log("Update rejected: Invalid note ID");
    return res.status(400).json({ error: "Invalid note ID" });
  }

  try {
    const updatedNote = await prisma.note.update({
      where: { id: noteId },
      data: {
        ...(title !== undefined && { title }),
        ...(content !== undefined && { content }),
      },
    });
    console.log("Note updated successfully:", updatedNote);
    res.json(updatedNote);
  } catch (error) {
    console.error("Error updating node:", error); //debug log
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
});

// DELETE /notes/:id (delete a note)
app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.note.delete({
      where: { id: parseInt(id) },
    });
    console.log("Note deleted:", id);
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Note not found" });
    }
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ⚙️`);
});
