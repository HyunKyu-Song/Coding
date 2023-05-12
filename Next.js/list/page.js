import { connectDB } from "@/util/database.js";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {

   const client = await connectDB;
   const db = client.db("forum");
   let result = await db.collection('post').find().toArray();
   // console.log(result);

   return (
      <div className="list-container">
         <h2 className="list-title">List of writings</h2>
         {
            result.map(function (item, i) {
               return (
                  <div className="list-item" key={i}>
                     <Link href={`/detail/${item._id}`}><h3>{item.title}</h3></Link>
                     <p>{item.content}</p>
                     <DetailLink/>
                  </div>
               )
            })
         }
      </div>
   )
}
