import StartupCard, { PostType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home( {
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const params = await searchParams; 
  const query = params.query;


  const posts:PostType[]=[{
    _createdAt:new Date(),
    views:55,
    author:{_id:1,name:'Masoomeh'},
    _id:1,
    description:"This is a decription",
    image:"IC1EXIMymw35JeZPi27Z6Wb6LIv59juvr01z76QZ.jpg",
    category:"Cars",
    title:"We Cars"
  }] 

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your Startup, <br />
        Connect With Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pictures, and Get Notice in Virtual Competitions.
      </p>
      <SearchForm query={query} />
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query? `Search result for ${query}`:'All Startups'}
      </p>
      <ul className="card_grid mt-7">
      {posts?.length > 0 ?
      posts?.map((post:PostType)=>(
           <StartupCard key={post?._id} post={post}/>
      )):
      (
        <p className="no-result">No startups found</p>
      )
      }
      </ul>
    </section>
    </>
  );
}
