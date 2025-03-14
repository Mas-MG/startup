import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const params = await searchParams; 
  const query = params.query;


  return (
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
  );
}
