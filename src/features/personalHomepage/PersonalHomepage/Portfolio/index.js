import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startFetch } from "../../repositoriesSlice";

export const Portfolio = () => {
    const githubUsername = "dondeptu";

    const dispatch = useDispatch();
    //const repositoriesStatus = useSelector(selectRepositoriesStatus);
    //const repositoriesContent = useSelector(selectRepositoriesContent);

    useEffect(() => {
        dispatch(startFetch(githubUsername));
    }, [dispatch]);

    return (
        <section>

        </section>
    );
};