import { useNavigate } from "react-router";

export const ErrorPage = () => {
    const navigate = useNavigate();
    // console.log(navigate);
    return (
        <>
            <h1>404 Page Not Found</h1>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </>
    )
}