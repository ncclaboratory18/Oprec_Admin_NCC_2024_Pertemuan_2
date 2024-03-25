const express = require("express");
const app = express();
const dbconnection = require('./connection');

const PORT = 3000;

const db = [
    {
        nama: "Amel",
        asal: "Gresik",
        angkatan: 2021
    }
];

app.get("/", (req, res) => {
    res.send("Hello Camin-Camin NCC!");
});

app.get("/page1", (req, res) => {
    res.send("Hello from page 1");
});

app.get("/page2", (req, res) => {
    res.send("Hello from page 2");
});

app.get("/db", (req, res) => {
    res.status(200).json({ data: db});
});

app.get("/db-mysql", (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM biodata';

    // jalankan query
    dbconnection.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'There is an error', error: err });
        }

        // jika request berhasil
        res.status(200).json({ data: rows });
    });

    return 0;
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
