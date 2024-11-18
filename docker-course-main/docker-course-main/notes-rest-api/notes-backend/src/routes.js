const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const { Note } = require('./models');

const notebooksApiUrl = process.env.NOTEBOOKS_API_URL;
const noteRouter = express.Router();

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Note not found.' });
  }

  next();
};

noteRouter.post('/', async (req, res) => {
  try {
    const { title, content, notebookId } = req.body;

    let validatedNotebookId = null;

    if (!notebookId) {
      console.info({
        message: 'Notebook ID not provided. Storing note without notebook.',
      });
    } else if (!mongoose.Types.ObjectId.isValid(notebookId)) {
      return res.status(400).json({ error: 'Notebook not found', notebookId });
    } else {
      try {
        await axios.get(`${notebooksApiUrl}/${notebookId}`);
      } catch (err) {
        const jsonError = err.toJSON();

        if (jsonError.status === 404) {
          return res
            .status(400)
            .json({ error: 'Notebook not found', notebookId });
        } else {
          console.error({
            message:
              'Error verifying the notebook ID. Upstream notebooks service not available. Storing note with provided ID for later validation.',
            notebookId,
            error: err.message,
          });
        }
      } finally {
        validatedNotebookId = notebookId;
      }
    }

    if (!title || !content) {
      return res
        .status(400)
        .json({ error: "'title', 'content' fields are required." });
    }

    const note = new Note({ title, content, notebookId: validatedNotebookId });
    await note.save();
    res.status(201).json({ data: note });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

noteRouter.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).json({ data: notes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

noteRouter.get('/:id', validateId, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }

    return res.status(200).json({ data: note });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

noteRouter.put('/:id', validateId, async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }

    return res.json({ data: note });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

noteRouter.delete('/:id', validateId, async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }

    return res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  noteRouter,
};
