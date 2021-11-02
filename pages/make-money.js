import Link from 'next/dist/client/link';

export default function makeMoney() {


    return (
        <div className="d-flex justify-content-center align-items-center p-5 vh-100">
            <div className="col-10 p-2 d-flex flex-column justify-content-center">

                <p className="text-center">
                    This Service is coming soon...
                </p>
                <Link href="/" passHref><a className="text-center ">Back to Home</a></Link>
            </div>
        </div>

    )
}