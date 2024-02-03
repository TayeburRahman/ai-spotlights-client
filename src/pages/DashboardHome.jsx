import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  // Log user object and image URL to the console for debugging
  console.log("User Object:", user);
  console.log("Image URL:", user?.image);

  return (
    <main className="min-h-[calc(100vh-66px)] flex items-center justify-center">
      {/* <img
        className="rounded-full h-10 w-10 object-cover"
        src={user?.photoURL}
        alt={user?.displayName}
      />
      <h2 className="font-bold text-xl">
        Hey {user?.displayName}, Welcome To your Dashboard...
      </h2> */}
      <div>
        <div className="relative flex flex-col items-center rounded-[20px] w-100 mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
          <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
            <img src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png" className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
              <img className="h-full w-full rounded-full" src={user?.photoURL} alt="" />
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-xl font-bold text-black">
            {user?.displayName}
            </h4>
            <p className="text-base font-normal text-gray-600">Owner</p>
          </div>
          <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-black">17</p>
              <p className="text-sm font-normal text-gray-600">Tools</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-black">
                9.7K
              </p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-black">
                434
              </p>
              <p className="text-sm font-normal text-gray-600">Following</p>
            </div>
          </div>
        </div>
        <p className="font-normal text-navy-700 mt-20 mx-auto w-max">Welcome to your Dashboard <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" className="text-brand-500 font-bold">, {user?.displayName}</a></p>
      </div>

    </main>
  );
};

export default DashboardHome;
