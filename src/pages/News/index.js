import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function News() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 3000)
    }, [])

    return (
        <div style={{ height: '100vh' }}>
            {loading ? <div>Hello</div> : <SkeletonTheme baseColor="#ccc" highlightColor="#444" duration={3}>
                <div>
                    <Skeleton width={300} height={200} count={1} />
                </div>
            </SkeletonTheme>}
        </div>
    );
}

export default News;
