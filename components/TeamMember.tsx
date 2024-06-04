import Image from "next/image";
import Link from "next/link";

const TeamMember = ({name, img_src, link} : {name: string, img_src: string, link: string}) => {
    return (
        <div className="relative p-8 cursor-pointer group">
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <Image
                    src={img_src}
                    alt="teammember"
                    width={500}
                    height={500}
                    className="p-2"
                />
            </a>
            <p className="capitalize text-white text-xl text-center p-2">{name}</p>
        </div>
    );
}

export default TeamMember;
