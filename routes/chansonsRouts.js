const express = require('express')
let router = express.Router()
const songService = require('../services/Chansons.service')

router.get('/', async function (req, res, next) {
    try {
        res.json(await songService.getListOfSongs(req.query.page));
    } catch (err) {
        console.error(`Error while getting songs`, err.message);
        next(err);
    }
});

router.get('/one/:id', async function (req, res, next) {
    try {
        const songId = req.params.id;
        res.json(await songService.getSongById(songId));
    } catch (err) {
        console.error(`Error while getting song by ID`, err.message);
        next(err);
    }
});

router.post('/addSong', async function (req, res, next) {
    try {
        const newSongData = req.body;
        const result = await songService.addSong(newSongData);
        res.json(result);
    } catch (err) {
        console.error(`Error while adding a new song`, err.message);
        next(err);
    }
});

router.put('/:id', async function (req, res, next) {
    try {
        const songId = req.params.id;
        const updatedSongData = req.body;
        const result = await songService.updateSong(songId, updatedSongData);
        res.json(result);
    } catch (err) {
        console.error(`Error while updating a song`, err.message);
        next(err);
    }
});


router.delete('/:id', async function (req, res, next) {
    try {
        const songId = req.params.id;
        const result = await songService.deleteSong(songId);
        res.json(result);
    } catch (err) {
        console.error(`Error while deleting a song`, err.message);
        next(err);
    }
});

module.exports = router;