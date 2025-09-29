export function CardSkeleton() {
    return (
        <article className="card">
            <div className="skel img" />
            <div className="p">
                <div className="skel line" style={{ width: '60%' }} />
                <div className="skel line" style={{ width: '40%' }} />
                <div className="skel line" style={{ width: '50%', height: 32, borderRadius: 10 }} />
            </div>
        </article>
    )
}

export function DetailSkeleton() {
    return (
        <article className="card">
            <div className="skel img" />
            <div className="p">
                <div className="skel line" style={{ width: '50%' }} />
                <div className="skel line" style={{ width: '80%' }} />
                <div className="skel line" style={{ width: '30%' }} />
            </div>
        </article>
    )
}
