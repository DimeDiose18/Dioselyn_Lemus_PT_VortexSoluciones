import POST from '../utils/post.json';
import { Reactions } from './Reactions';


const PostCards = () => {
  const posts = POST;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 border-0">
          {posts.map((post) => (
            <section  className="group shadow-xl rounded-md p-3" key={post.id}>
              <a href={`/card/1`} >
                <div className="aspect-h-1 aspect-w-1 w-[100%] overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </a>
              <Reactions />
              <h2 className="mt-4 text-gray-700 text-[1.5rem]">{post.title}</h2>
              <p className="mt-1 text-lg font-medium text-gray-900"><span className='text-blacky text-[0.8rem] font-light'>Author: </span>{post.author}</p>
              <div className="mt-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="m-1 inline-block rounded-md bg-red px-3 py-1 text-sm font-normal text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
export { PostCards }