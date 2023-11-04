import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <div className="container mx-auto py-4">
            <div className="relative">
                <img className="h-[60vh] blur-[1px] md:blur-0 lg:h-full w-full px-4 lg:px-0 object-cover" src="https://i.ibb.co/fr7tDC5/Mask-group.jpg" alt="" />
                <div className="flex gap-4 items-center absolute bottom-1/3 left-10">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-xs md:text-sm lg:text-lg text-[#0078FF] font-semibold mb-2">Upgrade Your Home and Save Big</h2>
                        <h1 className="text-3xl md:text-[40px] lg:text-6xl font-bold mb-4">Hurry And Take <br /> Up To <span className="text-[#0078FF]">35%</span> Off.</h1>
                        <TypeAnimation
                            sequence={[
                                'Save 40% on premium headphones and speakers!',
                                1000,
                                'Up to 50% off on the latest gadgets and accessories!',
                                1000,
                                'Enjoy 20% off on select laptops and PCs!',
                                1000,
                            ]}
                            wrapper="p"
                            speed={60}
                            className="text-[10px] md:text-xs lg:text-lg text-[#002B44] capitalize font-semibold"
                            repeat={Infinity}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;