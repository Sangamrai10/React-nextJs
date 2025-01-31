import Loading from "./products/loading";
export default function Home() {
  return (
    <>
      <div className="flex justify-center content-center">this is  Home page </div>
      <div className='flex flex-wrap justify-center'>
        <Loading/>
      </div>

    </>
  );
}
