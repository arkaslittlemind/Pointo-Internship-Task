const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// GET /notes
router.get('/', async (req, res) => {
    try {
        const notes = await prisma.note.findMany();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to receive notes ❌' });
    }
});

// POST /notes
router.post('/', async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await prisma.note.create({
            data: {
                title,
                content,
            },
        });
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create note ❌ ' });
    }
});

// PUT /Notes/:id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const note = await prisma.note.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
            },
        });
        res.json(note);
    } catch (error) {
        res.status(404).json( { error: 'Note not found ❌' } );
    }
});

// DELETE /notes/:id
router.delete('/:id', async (req, res) => {
    const { id  } = req.params;

    try {
        await prisma.note.delete({
            where: { id: Number(id) },
        });
        res.json({ message: 'Note Deleted ✔️'})
    } catch (error) {
        res.status(404).json({ error: 'Note not found ❌' });
    }
});

module.exports = router;