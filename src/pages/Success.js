import { useLocation } from "react-router-dom"

const Success = () => {

    const location = useLocation()// USING THE LOCATION HOOK

    console.log(location);
    return(
        <div>
            Successful!
        </div>
    )
}

export default Success