
import Link from "next/link";

const Mainarticlecomp = ({post}) =>{
    return(<>
      
      <article
              key={post.id}
              className="relative overflow-hidden bg-white border border-gray-200 rounded-b-md p-5 transition duration-300 ease-in-out"
            >
              <h4 className="text-lg mb-2">
                <Link href={post.url} className="">
                  {post.title}
                </Link>
              </h4>
              <div className="text-gray-500 text-sm flex flex-wrap gap-4 mb-3">
                <span>
                  <i className="far fa-clock mr-1 text-blue-500"></i>
                  <Link href={post.url} className="hover:underline">
                    {post.date}
                  </Link>
                </span>
                <span>
                  <i className="far fa-keyboard mr-1 text-blue-500"></i>
                  <Link href={post?.author?.url} className="hover:underline">
                    {post?.author?.name}
                  </Link>
                </span>
              </div>
              <div className="text-gray-500 text-sm mb-3">
                <i className="far fa-folder-open mr-1 text-blue-500"></i>
                {post.categories.map((category, index) => (
                  <span key={index}>
                    <Link href={category.url} className="hover:underline">
                      {category.name}
                    </Link>
                    {index < post.categories.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{post.content}...</p>
              <Link
                href={post.url}
                className="text-blue-600 font-medium hover:underline"
              >
                Read more
              </Link>
            </article>
    
    
  
  
    </>)
  }

export default Mainarticlecomp