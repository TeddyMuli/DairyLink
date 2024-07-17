'use client'

import Image from "next/image";

const TeamMember = ({name, img_src, link, role} : {name: string, img_src: string, link: string, role: string}) => {
    return (
        <div className="relative cursor-pointer group hover:-translate-y-6 transition-all duration-500">
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <div className="w-60 h-60 relative">
                    <Image
                        src={img_src}
                        alt="teammember"
                        fill
                        className="p-1 rounded-full border-8 border-black"
                        style={{objectFit: "cover"}}
                    />
                </div>
            </a>
            <p className="capitalize text-xl font-bold text-center p-2">{name}</p>
            <div className="relative bottom-32 text-sm opacity-0 group-hover:opacity-100 bg-blue-600 rounded-lg p-2 font-bold text-center mb-4 max-w-40 break-words mx-auto">{role}</div>
        </div>
    );
}

export default TeamMember;
