import monk from 'monk';

let mongodb_url = process.env.MONGODB_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/rightclick';
let db = monk(mongodb_url);

export default db;
