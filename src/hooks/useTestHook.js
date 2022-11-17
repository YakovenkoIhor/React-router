import { useEffect } from "react";

 const useTestHook = () => {
    useEffect(() => {
        console.log('useTestHook');
    }, [])
 }
 export default useTestHook;
 