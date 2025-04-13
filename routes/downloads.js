const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/hello', (req, res) => {
    res.json({ message: 'Hallo von deinem Router!' });
});
router.get('/mainversion', (req, res) => {
    const filePath = path.join(__dirname, '../dwable/version.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Fehler beim Lesen der Datei:', err);
            return res.status(500).json({ error: 'Fehler beim Lesen der Datei' });
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseErr) {
            console.error('Fehler beim Parsen der JSON-Datei:', parseErr);
            res.status(500).json({ error: 'Ungültiges JSON-Format' });
        }
    });
});
router.get('/mainexe', (req, res) => {
    const filePath = path.join(__dirname, '../dwable/test.exe');
    res.download(filePath, "meineapp.exe", (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error downloading file');
        }
    });
});

module.exports = router;
