process.env.PORT = process.env.PORT || 8080;


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/publicacion';


} else {

    urlDB = 'mongodb+srv://bryan_gomez:Brayangomez1986@cluster0.ievef.mongodb.net/hotel';
}

process.env.URLDB = urlDB;


process.env.SEED = process.env.SEED || 'clave_de_desarrollo';