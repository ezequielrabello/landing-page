import { useEffect } from "react";

function resizeHandler() {
    let resizeTimer;
    const useResizeHandler = () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper")
        }, 400);
    }

    window.addEventListener("resize", useResizeHandler)
    return(
        window.removeEventListener("resize", useResizeHandler)
    )
}

export default resizeHandler