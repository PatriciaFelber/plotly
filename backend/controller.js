const fs = require('fs');

//Path zu den CSV-Dateien festlegen
const reflectivityPointwise = '../assets/reflectivityPointwise.csv';
const thicknessPointwise = '../assets/thicknessPointwise.csv';

//Funktion zum einlesen der CSV-Datei
function readCSV(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

//Daten String in ein Array umwandeln mit dem echarts arbeiten kann 
function formatString(csvString) {
    const rows = csvString.split('\n');
    const xValue = [];
    const yValue = [];
    const zValue = [];

    for(let i = 2; i < rows.length; i++) {
        const values = rows[i].split(',');
        xValue.push(String(values[0]));
        yValue.push(String(values[1]));
        zValue.push(String(values[2]));
    }
    return {
        xValue: xValue,
        yValue: yValue,
        zValue: zValue
    };
}

exports.getReflectivity = (req, res) => {
    const reflectivityData = formatString(readCSV(reflectivityPointwise));
    res.json(reflectivityData);
}

exports.getThickness = (req, res) => {
    const thicknessData = formatString(readCSV(thicknessPointwise));

    res.json(thicknessData);
}