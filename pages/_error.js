import Error from '../components/layout/Error';

function ErrorPage(error) {
    return <Error message={error.message} statusCode={error.statusCode} stack={error.traceError} />;
}

ErrorPage.getInitialProps = async (context) => {
    return { error: context.query.error || {} };
};

export default ErrorPage;
