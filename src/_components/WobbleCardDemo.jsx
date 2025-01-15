// "use client";

// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import Link from "next/link";

// export default function WobbleCardDemo() {
//     return (
//         <div>
//             <CardContainer className="inter-var">
//                 <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//                     <CardItem
//                         translateZ="50"
//                         className="text-xl font-bold text-neutral-600 dark:text-white"
//                     >
//                         Make things float in air
//                     </CardItem>
//                     <CardItem
//                         as="p"
//                         translateZ="60"
//                         className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//                     >
//                         Hover over this card to unleash the power of CSS perspective
//                     </CardItem>
//                     <CardItem translateZ="100" className="w-full mt-4">
//                         <Image
//                             src="/Cplant.jpg"
//                             height="1000"
//                             width="1000"
//                             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                             alt="thumbnail"
//                         />
//                     </CardItem>
//                     <div className="flex justify-between items-center mt-20">
//                         <CardItem
//                             translateZ={20}
//                             as={Link}
//                             href="https://twitter.com/mannupaaji"
//                             target="__blank"
//                             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//                         >
//                             Try now →
//                         </CardItem>
//                         <CardItem
//                             translateZ={20}
//                             as="button"
//                             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//                         >
//                             Sign up
//                         </CardItem>
//                     </div>
//                 </CardBody>
//             </CardContainer>

//             <CardContainer className="inter-var">
//                 <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//                     <CardItem
//                         translateZ="50"
//                         className="text-xl font-bold text-neutral-600 dark:text-white"
//                     >
//                         Make things float in air
//                     </CardItem>
//                     <CardItem
//                         as="p"
//                         translateZ="60"
//                         className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//                     >
//                         Hover over this card to unleash the power of CSS perspective
//                     </CardItem>
//                     <CardItem translateZ="100" className="w-full mt-4">
//                         <Image
//                             src="/Cplant.jpg"
//                             height="1000"
//                             width="1000"
//                             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                             alt="thumbnail"
//                         />
//                     </CardItem>
//                     <div className="flex justify-between items-center mt-20">
//                         <CardItem
//                             translateZ={20}
//                             as={Link}
//                             href="https://twitter.com/mannupaaji"
//                             target="__blank"
//                             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//                         >
//                             Try now →
//                         </CardItem>
//                         <CardItem
//                             translateZ={20}
//                             as="button"
//                             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//                         >
//                             Sign up
//                         </CardItem>
//                     </div>
//                 </CardBody>
//             </CardContainer>

//             <CardContainer className="inter-var">
//                 <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//                     <CardItem
//                         translateZ="50"
//                         className="text-xl font-bold text-neutral-600 dark:text-white"
//                     >
//                         Make things float in air
//                     </CardItem>
//                     <CardItem
//                         as="p"
//                         translateZ="60"
//                         className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//                     >
//                         Hover over this card to unleash the power of CSS perspective
//                     </CardItem>
//                     <CardItem translateZ="100" className="w-full mt-4">
//                         <Image
//                             src="/Cplant.jpg"
//                             height="1000"
//                             width="1000"
//                             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                             alt="thumbnail"
//                         />
//                     </CardItem>
//                     <div className="flex justify-between items-center mt-20">
//                         <CardItem
//                             translateZ={20}
//                             as={Link}
//                             href="https://twitter.com/mannupaaji"
//                             target="__blank"
//                             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//                         >
//                             Try now →
//                         </CardItem>
//                         <CardItem
//                             translateZ={20}
//                             as="button"
//                             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//                         >
//                             Sign up
//                         </CardItem>
//                     </div>
//                 </CardBody>
//             </CardContainer>

//             <CardContainer className="inter-var">
//                 <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//                     <CardItem
//                         translateZ="50"
//                         className="text-xl font-bold text-neutral-600 dark:text-white"
//                     >
//                         Make things float in air
//                     </CardItem>
//                     <CardItem
//                         as="p"
//                         translateZ="60"
//                         className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//                     >
//                         Hover over this card to unleash the power of CSS perspective
//                     </CardItem>
//                     <CardItem translateZ="100" className="w-full mt-4">
//                         <Image
//                             src="/Cplant.jpg"
//                             height="1000"
//                             width="1000"
//                             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                             alt="thumbnail"
//                         />
//                     </CardItem>
//                     <div className="flex justify-between items-center mt-20">
//                         <CardItem
//                             translateZ={20}
//                             as={Link}
//                             href="https://twitter.com/mannupaaji"
//                             target="__blank"
//                             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//                         >
//                             Try now →
//                         </CardItem>
//                         <CardItem
//                             translateZ={20}
//                             as="button"
//                             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//                         >
//                             Sign up
//                         </CardItem>
//                     </div>
//                 </CardBody>
//             </CardContainer>

//         </div>
//     );
// }


"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function WobbleCardDemo() {
    const cardData = [
        {
            title: "Nature Photography",
            description: "Capture the beauty of landscapes with professional techniques",
            image: "/Cplant.jpg",
            link: "https://twitter.com/mannupaaji"
        },
        {
            title: "Urban Explorer",
            description: "Discover hidden gems in city architecture and street art",
            image: "/CplantTools.jpg",
            link: "https://twitter.com/mannupaaji"
        },
        {
            title: "Tech Innovation",
            description: "Stay ahead with cutting-edge technology trends and insights",
            image: "/fertiliser.jpeg",
            link: "https://twitter.com/mannupaaji"
        },
        {
            title: "Creative Design",
            description: "Transform ideas into stunning visual experiences",
            image: "/seeds.jpg",
            link: "https://twitter.com/mannupaaji"
        }
    ];


    return (
        <div className="flex flex-row gap-3 overflow-x-auto px-3 py-8">
            {cardData.map((card, index) => (
                <CardContainer key={index} className="inter-var flex-shrink-0">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-auto rounded-xl border">
                        <div className="p-6">
                            <CardItem
                                translateZ="50"
                                className="text-lg font-bold text-neutral-600 dark:text-white"
                            >
                                {card.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {card.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={card.image}
                                    width={400}
                                    height={225}
                                    className="w-full h-48 object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={card.title}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-8">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={card.link}
                                    target="__blank"
                                    className="px-3 py-1 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-3 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    );
}