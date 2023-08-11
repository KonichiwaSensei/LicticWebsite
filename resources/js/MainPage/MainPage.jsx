import { ThemeContext } from "../ThemeContext";

import { useContext, useState } from "react";
import EmbedFrame from "./EmbedFrame";

export default function MainPage() {

    const { theme } = useContext(ThemeContext);
    const [shakingAnimation, setShakingAnimation] = useState("shaking_animation");

    const youTubePlaylistId = "PL2Ji0h42fuIV-z2rCKCg_pxeNZseKsmBL";
    const youTubeUrl = `https://www.youtube.com/embed/videoseries?list=${youTubePlaylistId}`;

    const soundCloudUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1354493554&color=%23575756&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"

    const handleShakeStart = () => {
        if (shakingAnimation) {
            setShakingAnimation("")
        } else {
            setShakingAnimation("shaking_animation");
        }

    };

    return (
        <div className="main_page">
            {/* <div className="main_page_back">
                <h1>Welcome</h1>
            </div> */}

            <div className="main_page_front">
                <div className="welcome_text">
                    <h1 className={`welcome_message start ${theme}`}>Welcome to the</h1>
                    <h1 className={`welcome_message end ${theme}`}>website</h1>
                </div>
                <div className="welcome_embed_div youtube">
                    <EmbedFrame
                        pClassName={`embed_label ${theme}`} pText={"YouTube"}
                        iframeClassName={`${theme}`}
                        url={youTubeUrl}
                    />
                </div>
                <div className="welcome_embed_div soundcloud">
                    <EmbedFrame
                        pClassName={`embed_label ${theme}`} pText={"SoundCloud"}
                        iframeClassName={`${theme}`}
                        url={soundCloudUrl}
                    />

                </div>
            </div>
        </div>
    )
}