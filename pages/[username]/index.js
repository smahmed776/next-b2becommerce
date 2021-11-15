import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function marchent() {
    const history = useRouter();
    useEffect(() => {
        history.push('/')
    })
    return (
        <div className="d-flex justify-content-center align-items-center p-5 vh-100">
            <div className="col-10 p-2 d-flex justify-content-center">

                <p>
                    <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                    Loading...
                </p>
            </div>
        </div>
    )
}