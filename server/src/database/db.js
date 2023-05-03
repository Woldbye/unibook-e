import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';

const fpath = path.join(__dirname,'data','rooms.json');
const db_json = new JSONFileSync('db.json');
const db = new LowSync(db_json);

await db.read();




// class Database {
  


// };