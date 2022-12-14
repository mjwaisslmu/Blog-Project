export default function Article({ article }) {
    return (
        <article>
            {!article ? (
                <p>No Article Selected</p>
            ) : (
                <section>
                    <h2>{article.title}</h2>
                    <p className="date">{`Posted: ${article.date}`}</p>
                    <p className="body">{article.body}</p>
                </section>
            )}
        </article>
    );
}