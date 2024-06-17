import Image from "next/image";
import Link from "next/link";

const TeamMember = ({name, img_src, link, role} : {name: string, img_src: string, link: string, role: string}) => {
    return (
        <div className="relative cursor-pointer group hover:-translate-y-6 transition-all duration-500">
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <div className="w-[300px] h-[300px] relative">
                    <Image
                        src={img_src}
                        alt="teammember"
                        fill={true}
                        objectFit="cover"
                        className="p-2"
                    />
                </div>
            </a>
            <p className="capitalize text-white text-xl text-center p-2">{name}</p>
            <div className="relative bottom-32 text-xl opacity-0 group-hover:opacity-100 bg-blue-600 rounded-lg p-2 font-bold text-center mb-4 max-w-[250px] break-words mx-auto">{role}</div>
        </div>
    );
}

export default TeamMember;
