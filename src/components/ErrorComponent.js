import { useRouteError } from "react-router";

const ErrorComponent = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops! Something went wrong {err.status}: {err.statusText}</h1>
        </div>
    )
}

export default ErrorComponent;