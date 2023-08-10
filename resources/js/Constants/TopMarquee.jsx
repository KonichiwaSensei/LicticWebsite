import Marquee from "react-fast-marquee";

export default function TopMarquee() {


    return (
        <>
            <Marquee
                className="top_of_page-marquee"
                autoFill="ture"
                speed={30}
            >
                Lictic &#8203;
            </Marquee>
        </>
    )
}