import Link from "next/link"
import Image from "next/image"

const About = () => {
    return (
        <div id="about">
        <section className="text-gray-600 body-font overflow-hidden bg-slate-950">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
        alt="ecommerce"
        className="lg:w-96 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="/images/author1.png"
        width={500}
        height={500}

      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-cyan-500 tracking-widest">
          About Me!
        </h2>
        <h1 className="text-gray-100 text-3xl title-font font-medium mb-1">
          Naghmana's Informative Blog
        </h1>
       
        <p className="leading-relaxed text-cyan-500 mt-6">
        Welcome to my blog! I am passionate about the exciting world of Machine Learning and Deep Learning, where data meets innovation. 
        With a background in [Your Background, e.g., computer science, data science, or a related field], I have always been fascinated by 
        how intelligent algorithms can transform complex information into actionable insights. Through this blog, I aim to demystify the
         concepts of machine learning and deep learning, sharing my knowledge and experiences while exploring the latest trends, applications,
          and breakthroughs in the field. Whether you are a beginner curious about the basics or a seasoned professional looking to stay updated,
           my goal is to provide you with clear explanations, practical examples, and valuable resources to enhance your understanding of these 
           powerful technologies. 
        Join me on this journey as we uncover the limitless possibilities that machine learning and deep learning have to offer!
        </p>
        
          
        
        </div>
      
    </div>
  </div>
</section>
</div>

    )
}
export default About