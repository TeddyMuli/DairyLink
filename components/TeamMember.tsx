import Image from "next/image";

const TeamMember = ({name} : {name: string}) => {
    return (
        <div>
            <Image
                src="/team.png"
                alt="teammember"
                width={200}
                height={200}
            />
            <p className="capitalize text-white text-center p-2">{name}</p>
        </div>
    );
}

export default TeamMember;
