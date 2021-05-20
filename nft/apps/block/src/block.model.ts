import {
  ConnectionError,
  createPool,
  sql
} from 'slonik';


export class Block{

    test(){
        const pool = createPool("postgresql://nftmarket:nftmarket@localhost:5432/nftmarket")
        console.log("hello world");
        pool.connect(async(conn) =>{
            let q = await conn.query(sql`select 1`);
            console.log(q);
        })
    }
}