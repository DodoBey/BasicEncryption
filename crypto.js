var md5 = require('md5');
var crypto = require('crypto');
var fs = require('fs')

// md5 Example //
console.log(md5('message'));

var hmac = crypto.createHmac('md5', 'Dogukan')

data = hmac.update('dogukan');

gen_hmac = data.digest('hex')

console.log("hmac:" + gen_hmac)

// On File sha256 Example //

var hash = crypto.createHash('sha256');

var testFile = "test.txt"
var fileData = fs.ReadStream(testFile);

fileData.on('data', function(data){
    hash.update(data)
})

fileData.on('end', function(){
    var gen_hash = hash.digest('hex')
    console.log('Hash generated based on sha256 Algorithm.' + "Output is: " + gen_hash);
    fs.writeFileSync(testFile, gen_hash);
})