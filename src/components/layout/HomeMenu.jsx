import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute -top-[70px] left-0 -z-10">
                    <Image src={'/lectus-right.png'} width={200} height={185} alt={"lectus"}/>
                </div>
                <div className="absolute -top-[70px] right-0 -z-10">
                    <Image src={'/lectus-left.png'} width={150} height={100} alt={"lectus"}/>
                </div>
            </div>
            <div className="text-center mb-5">
                <SectionHeader
                    subHeader={'Check out'}
                    mainHeader={'Menu'}
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
        </section>
    )
};
