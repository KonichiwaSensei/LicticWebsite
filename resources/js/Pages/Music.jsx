import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext'

export default function Music() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="music_page">
            {/* <div className="music_page_back">

            </div> */}

            <div className="music_page_front">
                <p className={`music_para ${theme}`}>
                    My current music projects are:
                </p>
            </div>

        </div>
    )
}