import React from "react";
import data from "../assets/data6 (1).json";

export default function PostsSection() {
  return (
    <>
      {/* <div>
        {Object.values(data).map((item) => (
          <div key={item.Title}>
            <br></br>
            <br></br>
            <h2>{item.Title}</h2>
            <br></br>
            <p>
              Category:
              {item.Category ? (
                item.Category.map((category, index) => (
                  <span key={index}>{category}</span>
                ))
              ) : (
                <span>No category available</span>
              )}
            </p>
            <br></br>
            <p>
              Languages:
              {item.Languages ? (
                item.Languages.map((language, index) => (
                  <p key={index}>{language}</p>
                ))
              ) : (
                <span>No languages available</span>
              )}
            </p>
            <br></br>
            <p>
              Resolutions Available:
              {item.Resolutions ? (
                item.Resolutions.map((resolution, index) => (
                  <p key={index}>{resolution}</p>
                ))
              ) : (
                <span>No resolutions available</span>
              )}
            </p>
            <br></br>
            <p>
              URLs:
              {item.URLs ? (
                item.URLs.map((url, index) => (
                  <p key={index}>
                    URL {index}: <a href={url}>{url}</a>
                  </p>
                ))
              ) : (
                <span>No URLs available</span>
              )}
            </p>
          </div>
        ))}
      </div> */}

      <section className="py-24 lg:pt-20 lg:pb-32 bg-slate-100 overflow-hidden dark:bg-slate-700">
        <div className="container px-4 mx-auto">
          <h1 className="mb-10 tracking-tighter ml-10 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-600 bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent">
            New Blogs
          </h1>
          <div className="flex flex-wrap">
            {Object.values(data).map((item) => (
              <div
                key={item.Title}
                className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4"
              >
                <a
                  to={`/blog/${item._id}`}
                  className="w-full h-full group border-2 border-solid border-indigo-300 rounded-lg bg-blue-100 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 flex flex-col items-center m-3"
                >
                  <div className="overflow-hidden rounded-lg m-1">
                    <img
                      className="w-60 h-60 rounded-lg transform hover:scale-105 transition duration-500"
                      src="https://picsum.photos/200/300"
                      alt=""
                    />
                  </div>
                  <div className="flex my-3 text-gray-500 font-medium tracking-tight dark:text-gray-300">
                    <span className="mr-4 text-red-500 font-semibold">
                      {item.Languages ? (
                        item.Languages.map((language, index) => (
                          <p key={index}>{language}</p>
                        ))
                      ) : (
                        <span>No languages available</span>
                      )}
                    </span>
                    <span>2 months</span>
                  </div>
                  <span className="text-gray-500 font-semibold text-xs dark:text-gray-400 italic">
                    {item.Category ? (
                      item.Category.map((category, index) => (
                        <span key={index}>{category}</span>
                      ))
                    ) : (
                      <span>No category available</span>
                    )}
                  </span>
                  <h3
                    className="text-xl cursor-pointer group-hover:text-blue-400 font-semibold group-hover:underline dark:text-gray-100 text-center"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.Title}
                  </h3>
                  <div
                    className="flex pl-1 pt-3 w-[90%] text-xs text-gray-400 dark:text-gray-300"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.Resolutions ? (
                      item.Resolutions.map((resolution, index) => (
                        <p key={index}>{resolution}</p>
                      ))
                    ) : (
                      <span>No resolutions available</span>
                    )}
                  </div>
                  <div
                    className="flex pl-1 text-gray-500 dark:text-gray-300 mt-3 italic"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    <span className="text-xs mr-2 text-gray-500 font-semibold dark:text-gray-400">
                      Time:
                    </span>
                    <span className="text-gray-500 font-semibold text-xs dark:text-gray-400">
                      By:
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <p>Resolutions: {item.Resolutions.join(", ")}</p>
            <p>Languages: {item.Languages.join(", ")}</p>
            
            <p>Rating: {item.Rating[0]}</p>
            <p>Categories: {item.Category.join(", ")}</p> */
}
//
//   );
// }
