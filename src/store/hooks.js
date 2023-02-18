import { useContext } from 'react'
import Context from "./Context";

export const useStore = () => {
    const [state, distpatch] = useContext(Context)

    return [state, distpatch]
}
