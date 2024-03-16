import Layout from "@/components/Layout/Layout";
import { useContent } from "@/hooks/useContent";
import * as React from "react";
export default function Quizzes() {
    const { getQuizzes } = useContent();

    const [quizzes, setQuizzes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getQuizzes().then((data) => {
            setQuizzes(data);
            setLoading(false);
        });
    }, [getQuizzes]);

    return (
        <Layout>
            <h1>Quizzes</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <pre>{JSON.stringify(quizzes, null, 2)}</pre>
            )}{" "}
        </Layout>
    );
}
