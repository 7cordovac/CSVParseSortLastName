var fs= require("fs");
var parse = require('csv-parse');

var inputFile='inputshort.csv';

fs.readFile('inputshort.csv',"utf8", function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;


});



// console.log("Processing input file");

var arr =[];


var parser = parse({delimiter: ","}, function (err, data) {
    // note: array element at index 0 contains the row of headers that we should skip
    data.forEach(function(record) {
      // create list object out of parsed fields
   var list = {"printedIP" : record[0].slice(0),
                    "regionNo" : record[1],
                    "firstName" : record[2],
                    "lastName" : record[3],
                    "mailingAddress" : record[4],
                    "city" : record[5],
                    "state" : record[6],
                    "zipCode" : record[7],
                    "yearOfMembership" : record[8],
                 };
                 arr.push(list);
              });

                 console.log(arr.sort(compare));

               function compare(a,b) {
                if (a.lastName < b.lastName)
                   return -1;
                if (a.lastName > b.lastName)
                   return 1;
                return 0;
               }

           });
           // read the inputFile, feed the contents to the parser
           fs.createReadStream(inputFile).pipe(parser);
