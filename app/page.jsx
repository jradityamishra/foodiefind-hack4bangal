import Card from "../components/json/card";
import { AiFillStar } from "react-icons/ai";
export default function Home() {
  const posts = [
    {
      title: "What is SaaS? Software as a Service Explained",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      img: "https://res.cloudinary.com/dlmgrochr/image/upload/v1688966289/image_11_x6epzj.png",
      authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      authorName: "Sidi dev",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "A Quick Guide to WordPress Hosting",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
      img: "https://res.cloudinary.com/dlmgrochr/image/upload/v1688966288/image_9_xqmmpt.png",
      authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      authorName: "Micheal",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
      img: "https://res.cloudinary.com/dlmgrochr/image/upload/v1688966288/image_8_gqzmjs.png",
      authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
      authorName: "Luis",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "What is SaaS? Software as a Service Explained",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      img: "https://res.cloudinary.com/dlmgrochr/image/upload/v1688966288/image_6_hdeabz.png",
      authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      authorName: "Sidi dev",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "A Quick Guide to WordPress Hosting",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
      img: "https://res.cloudinary.com/dlmgrochr/image/upload/v1688966288/image_7_p622km.png",
      authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      authorName: "Micheal",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
      img: "https://media.licdn.com/dms/image/C5612AQGRIdDNWLhdsg/article-cover_image-shrink_600_2000/0/1569255417375?e=2147483647&v=beta&t=IAhRgqi_ly2m_fqNFOZW6maGs5erO25EdipzAF_VLH8",
      authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
      authorName: "Luis",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
  ];

  const bgImg =
    "https://res.cloudinary.com/dlmgrochr/image/upload/v1688926384/Frame_4_rdqfqf.png";
  return (
    <>
      <section>
        {/* header */}
        <div className="my-32 mx-24 gap-20 grid lg:grid-cols-2 grid-cols-1">
          <div className="text-6xl font-semibold ">
            Find the best <br /> street food <br /> in your town
          </div>
          <div className="w-full max-w-[500px] h-[300px] rounded-lg bg-slate-400">
            {/* <img
              src="https://res.cloudinary.com/dlmgrochr/image/upload/v1688966289/image_11_x6epzj.png"
              alt="img"
            /> */}
          </div>
        </div>
      </section>
      <div className="mt-12 mb-4 h-4/5 ">
        {/* search bar */}

        <div
          class="bg-slate-400 w-full h-[250px] flex flex-col items-center"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <div class="text-3xl font-medium font-poppins mb-10 mt-14 text-white shadow-2xl">
            Discover the Regional Taste
          </div>
          <div class="max-w-full">
            <input
              type="text"
              class="p-3 w-[500px] rounded-lg"
              placeholder="Search for your favourite street food"
            />
            <button class="bg-white p-3 rounded-lg -ml-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* cards */}

        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
          <div className="text-center">
            <h1 className="text-3xl text-gray-800 font-semibold">
              Nearby Stalls and Outlets
            </h1>
            <p className="mt-3 text-gray-500">
              Explore the good foods in your town and enjoy the taste.
            </p>
          </div>
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((items, key) => (
              <article
                className=" w-[350px] mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
                key={key}
              >
                <a href={items.href}>
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full h-48 rounded-t-md object-cover"
                  />
                  {/* <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                    <div className="flex-none w-10 h-10 rounded-full">
                      <img
                        src={items.authorLogo}
                        className="w-full h-full rounded-full"
                        alt={items.authorName}
                      />
                    </div>
                    <div className="ml-3">
                      <span className="block text-gray-900">
                        {items.authorName}
                      </span>
                      <span className="block text-gray-400 text-sm">
                        {items.date}
                      </span>
                    </div>
                  </div> */}
                  <div className="pt-3 ml-4 mr-2 mb-3 flex justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      Rohit Chaiwala
                    </h3>
                    <span className="bg-[#24963F] p-1 text-sm flex items-center text-white rounded-md">
                      4.3 <AiFillStar className="ml-1 w-4" />
                    </span>
                  </div>
                  <div className=" ml-4 mr-2 mb-3">
                    <p className="text-gray-400 text-sm mt-1">
                      Ruby General Hospital, Kolkata
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
      <section
        className="py-28 mt-20"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
          <div className="max-w-xl space-y-3 md:mx-auto">
            <h3 className="text-indigo-600 font-semibold">
              Built by Foodies, for Foodies
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let other people know about your favourite stall
            </p>
            {/* <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat non proident.
            </p> */}
          </div>
          <div className="mt-4">
            <a
              href="/upload/stall"
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              Add new stall
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
