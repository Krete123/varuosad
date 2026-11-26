const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const spareParts = [];

fs.createReadStream('LE.txt')
    .pipe(csv({ separator: '\t', headers: ['sn', 'name', 'stock1', 'stock2', 'stock3', 'stock4', 'stock5', 'unknown', 'netPrice', 'brand', 'price'] }))
    .on('data', (row) => {
        spareParts.push(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
        console.log(spareParts);
    });