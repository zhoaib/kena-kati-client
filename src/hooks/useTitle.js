import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Kena-Kati`;
    }, [title])
};

export default useTitle;