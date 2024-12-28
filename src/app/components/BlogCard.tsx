import Image from "next/image"
import Link from "next/link"

const BlogCard = () => {
    return (
        <div id="Home">
    <section className="text-gray-600 body-font bg-slate-950">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-serif lg:text-5xl title-font mb-2 text-cyan-500">
        Understanding Machine Learning and Deep Learning
        </h1>
        <div className="h-1 w-20 bg-indigo-200 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-300">
      Introduce the concepts of Machine Learning (ML) and Deep Learning (DL),
       explaining their significance in todays tech-driven world and how they are reshaping industries.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
       <div className="xl:w-1/4 md:w-1/2 p-4"> 
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Link href={"https://localhost:3000"}>
          <Image
            className="h-40  w-full object-cover mb-6"
            src="/images/machine1.png"
            alt="content"
            width={500}
            height={100}
          />
          </Link>
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
            Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Machine Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800 ">
          Define Machine Learning, discussing its basic principles. 
          Explain how ML enables systems to learn from data, recognize patterns, and make decisions with minimal human intervention.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine3.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Deep Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          Deep Learning, a fascinating subset of Machine Learning, is revolutionizing the way we process and understand vast amounts of data. By mimicking the neural networks of the human brain.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4 ">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine2.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-semibold title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-medium title-font mb-4">
          Machine Learning 
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          In this blog, we will explore the fundamental concepts of Machine Learning, including its types such as supervised,
           unsupervised, and reinforcement learning. 
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine4.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Deep Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          Deep Learning,In this blog, well delve into the intricacies of deep learning, uncovering its foundational concepts, 
          key architectures like convolutional and recurrent neural network.
          </p>
        </div>
      </div>

    
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine5.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Machine Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          Deep Learning,In this blog, well delve into the intricacies of deep learning, uncovering its foundational concepts, 
          key architectures like convolutional and recurrent neural network.
          </p>
          </div>
        </div>
      


      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine6.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Deep Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          Deep Learning,In this blog, well delve into the intricacies of deep learning, uncovering its foundational concepts, 
          key architectures like convolutional and recurrent neural network.
          </p>
          </div>
        </div>
    


<div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine7.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Machine Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          Deep Learning,In this blog, well delve into the intricacies of deep learning, uncovering its foundational concepts, 
          key architectures like convolutional and recurrent neural network.
          </p>
          </div>
        </div>
      

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine8.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Deep Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          Deep Learning,In this blog, well delve into the intricacies of deep learning, uncovering its foundational concepts, 
          key architectures like convolutional and recurrent neural network.
          </p>
          </div>
        </div>
      
      



      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine9.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Machine Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          Deep Learning,In this blog, well delve into the intricacies of deep learning, uncovering its foundational concepts, 
          key architectures like convolutional and recurrent neural network.
          </p>
          </div>
        </div>
      


      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine10.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Deep Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          Deep Learning,In this blog, well delve into the intricacies of deep learning, uncovering its foundational concepts, 
          key architectures like convolutional and recurrent neural network.
          </p>
          </div>
        </div>

      


      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine11.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Machine Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          Deep Learning,In this blog, well delve into the intricacies of deep learning, uncovering its foundational concepts, 
          key architectures like convolutional and recurrent neural network.
          </p>
          </div>
        </div>
      
      

      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-300 p-6 rounded-sm shadow-lg hover:shadow-cyan-700">
          <Image
            className="h-40  w-full object-cover object-center mb-6"
            src="/images/machine12.png"
            alt="content"
            width={500}
            height={100}
          />
          <h3 className="tracking-widest text-cyan-700 text-xs font-medium title-font">
          Naghmanas Blog
          </h3>
          <h2 className="text-lg text-gray-950 font-semibold title-font mb-4">
          Deep Learning
          </h2>
          <p className="leading-relaxed text-base text-cyan-800">
          Deep Learning,In this blog, well delve into the intricacies of deep learning, uncovering its foundational concepts, 
          key architectures like convolutional and recurrent neural network.
          </p>
          </div>
        </div>
      </div>
</div>
</section>


</div>

    )
}

export default BlogCard