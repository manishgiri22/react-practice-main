// to import image in jsx we should follow this step

function HomePage(){
    return(
        <>
        <h1>this is home page</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium laborum necessitatibus debitis quaerat? Maiores obcaecati sed rerum autem dolorum harum natus inventore aliquid iusto molestias laborum dignissimos, at voluptatem voluptatibus, impedit odio molestiae vitae voluptates iure, facere ullam blanditiis quod et! Vel corporis alias quas veniam odio ducimus dolor corrupti.</h2>
        {/* <img src='./assets/hero.png' alt="img"/> */}
        <div className=" bg-blue-500 text-white h-20 w-screen sm:bg-red-400 md:bg-black">
            Mobile first responsive design  , shadcn , acernity
        </div>
        <div className=" mt-10 grid grid-cols-5 p-5 gap-2">
            <div className=" h-10 border">jer</div>
            <div className=" h-5  p-2 border ">saer</div>
            <div className=" h-5 border ">ser</div>
            <div className=" h-5 border">ser</div>
            <div className=" h-5 border">ser</div>
        </div>
        </>



    )
}
export default HomePage