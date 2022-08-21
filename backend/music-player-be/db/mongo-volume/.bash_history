exit
mongo -u spotify-root -p spotify-pwd --authenticationDatabase spotify-mongodb
Error: Authentication failed. :
connect@src/mongo/shell/mongo.js:372:17
@(connect):2:6
exception: connect failed
exiting with code 1
mongo -u spotify-root -p spotify-pwd --authenticationDatabase spotify-mongodb
mongo 'mongodb://spotify-root:spotify-pwd@localhost:27017/spotify-mongodb'
use spotify-mongodb
exit
exit
