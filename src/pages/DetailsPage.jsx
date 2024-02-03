import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { AiFillYoutube } from "react-icons/ai";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import Rating from "react-rating";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { buttonVariants } from "../components/Button";
import ToolsCard from "../components/ToolsCard";
import { baseUrl } from "../config/Url";

const DetailsPage = () => {
  const params = useParams()
  const [isOpenText, setIsOpenText] = useState(false);
  const { isLoading, error, data } = useQuery({
    queryKey: ["approvedTools"],
    queryFn: () =>
      axios
        .get(`${baseUrl}/api/v1/tools/approved-tools`)
        .then((res) => res.data),
  });

  const toolDetails = useLoaderData();
  const {
    _id,
    title,
    subtitle,
    metaTitle,
    metaDescription,
    description,
    category,
    websiteLink,
    toolsImage,
    youtubeLink,
    facebookLink,
    videoReviewLink,
    discordLink,
    twitterLink,
    linkedinLink,
    ratings,
    favourite,
    tags
  } = toolDetails.data;

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error.message}
      </div>
    );

  const relatedTools = data
    .filter((tool) => tool.category === category && tool.title !== title)
    .slice(0, 6);

  const relatedProducts = data
    .filter((tool) => tool.ratings === ratings && tool.title !== title)
    .slice(0, 6);

    const handelOnSubmit = (event)=>{
      event.preventDefault();
      console.log(event.target.value);

    }

  return (
    <main className="wrapper details-wrapper my-10">
      {metaTitle && metaDescription && (
        <Helmet>
          <title>{`${metaTitle} -- Ai SpotLghts`}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <img
          src={toolsImage}
          alt={title}
          className="w-full h-auto rounded-lg"
        />

        <div className="space-y-2">
          <h2 className="text-5xl font-bold capitalize">{title}</h2>
          <Rating
            className="text-[24px]"
            initialRating={ratings}
            readonly
            emptySymbol={<span className="text-gray-300">&#9734;</span>}
            fullSymbol={<span className="text-yellow-400">&#9733; </span>}
          /> ({ratings})
          <div className="flex gap-2 items-center">
            <MdFavorite className="text-red-500 h-6 w-6 cursor-pointer" /> {favourite === undefined || favourite === 0 ? (
              (`(0)`)
            ) : (
              <>
                ({favourite})
              </>
            )}
          </div>

          <h4 className="text-lg">{subtitle}</h4>


          <Link
            to={websiteLink}
            className={buttonVariants({ colors: "transparent", size: "small" })}
            target="_blank"
          >
            View Deal
          </Link>
          <ul>
            {tags?.map((item, index) => (
              <li key={index} className="lowercase line-clamp-1 text-cyan">
                <span className="text-white dark:text-black capitalize">Tags: </span>{item}
              </li>
            ))}
          </ul>

          {(facebookLink ||
            discordLink ||
            twitterLink ||
            linkedinLink ||
            youtubeLink) && (
              <div className="space-y-2">
                <p>Social Links</p>
                <div className="flex gap-3 text-2xl">
                  {facebookLink && (
                    <Link to={facebookLink} target="_blank">
                      <FaFacebook />
                    </Link>
                  )}

                  {linkedinLink && (
                    <Link to={twitterLink} target="_blank">
                      <ImLinkedin />
                    </Link>
                  )}

                  {twitterLink && (
                    <Link to={twitterLink} target="_blank">
                      <BsTwitter />
                    </Link>
                  )}

                  {youtubeLink && (
                    <Link to={youtubeLink} target="_blank">
                      <AiFillYoutube />
                    </Link>
                  )}

                  {discordLink && (
                    <Link to={discordLink} target="_blank">
                      <BsDiscord />
                    </Link>
                  )}
                </div>
              </div>
            )}

              <div>
               <p className="mt-4">FeedBack:</p>
               
               <form className="mt-3" onSubmit={handelOnSubmit}>
                  <textarea className="py-2 px-2 textarea_feedback" type="text" 
                  onChange={(e) => setFeedBack(e.target.value)} 
                  placeholder="Enter your feedback" /> <br />
                  <button type="submit"  className={buttonVariants({ colors: "transparent", size: "small" })}> Submit </button> 
               </form> 
              </div>
        </div>
      </div>

      <div className={clsx(
        `flex justify-between gap-2 text-justify space-y-5 font-extralight details-align`,
      )}>
        <div className={clsx(`w-full md:w-[70%] card-align`)}>
          <h3 className="font-bold text-xl capitalize">{title} Features </h3>
           <div className={clsx(isOpenText ? null : "line-clamp-[7]",)}>
           <p
            className="space-y-5 leading-relaxed font-extralight"
            dangerouslySetInnerHTML={{ __html: description }}
          />
           </div>
          <button
            onClick={() => setIsOpenText(!isOpenText)}
            className="text-sky-400 font-bold ital"
          >
            {isOpenText ? "Read Less..." : "Read More..."}
          </button>
          {videoReviewLink && (
            <div className="space-y-5 mt-12">
              <p className="font-bold capitalize">{title} Video Review</p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe src={videoReviewLink} className="rounded-2xl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          )}

        </div>

        {/* { relatedProducts.length > 0 && ( */}
        <div className="my-10 w-[25%] card-align">
          <p className="font-bold text-2xl mb-5">Similar Tools </p>
          {relatedProducts.length === 0 ? (
            <p className="text-sky-300 font-medium">No similar products available!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 cards-align">
              {relatedProducts.map((item, index) => (
                <ToolsCard key={index} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* // )} */}
      </div>


      {relatedTools.length > 0 && (
        <div className="my-10">
          <p className="font-bold text-2xl mb-5">Similar Category Tools </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {relatedTools.map((item, index) => (
              <ToolsCard key={index} item={item} />
            ))}
          </div>
        </div>
      )}

    </main>
  );
};

export default DetailsPage;