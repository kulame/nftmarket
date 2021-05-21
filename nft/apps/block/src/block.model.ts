import { FlowService } from '@app/flow';
import {
  createPool,
  sql,
  DatabasePoolType
} from 'slonik';


export const range = (from, to, step) =>
  [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);

export const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
export class Block{

    service:FlowService;
    pool:DatabasePoolType;
    
    constructor(service: FlowService) {
        this.service = service;
        this.pool = createPool("postgresql://nftmarket:nftmarket@localhost:5432/nftmarket");
    }

    async test(){
        console.log("hello world");
        	
        console.log(process.memoryUsage());
        this.pool.connect(async(conn) =>{
            let q = await conn.query(sql`select 1`);
            console.log(q);
            let currentHeight = await conn.oneFirst(sql`
                select max(height) from blocks
            `);
            console.log(currentHeight);
            let height = await this.service.getLatestBlockHeight();
            let start = currentHeight ? currentHeight:30171528

            console.log(start);
            let items = range(start,height,1);
            
            for(let i of items){
                let block = await this.service.getBlockByHeight(i);
                console.log(`${block.height} ${block.timestamp}`) 
                await conn.query(sql`
                    insert into blocks (block_id,parent_id,height,
                        timestamp,collection_guarantees,block_seals,
                        signatures
                        )
                        values(${block.id},${block.parentId},
                            ${block.height},${block.timestamp},
                            ${JSON.stringify(block.collectionGuarantees)},
                            ${JSON.stringify(block.blockSeals)},
                            ${sql.array(block.signatures,sql` varchar(128) []`)}
                        )
                        ON CONFLICT(block_id) DO NOTHING`,
                );
                
            }
        })
        await this.pool.end();
    }


}