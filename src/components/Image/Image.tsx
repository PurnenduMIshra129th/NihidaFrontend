import { defaultImage } from "../../utils/constant";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Image({ imagePath = defaultImage , className ='' }: { imagePath: string , className?:string}) {
    return (
        <>
            <img onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = defaultImage;
            }}
                loading="lazy"
                className={`h-[12rem] w-full object-cover ${className}`} src={imagePath == ''? defaultImage : imagePath} alt="No image Found" />
        </>
    )
}

export default Image