import Link from 'next/dist/client/link';

export default function offers() {


    return (
        <div className="d-flex justify-content-center align-items-center p-5 vh-100">
            <div className="col-10 p-2 d-flex flex-column justify-content-center">

                <p className="text-center">
                    Please <Link href="/signup">Sign Up </Link> or <Link href="/login"> Login</Link> to see your offers!
                </p>
                <div className="d-flex justify-content-center">

                    <Link href="/" passHref><button className="btn btn-primary text-center ">Back to Home</button></Link>
                </div>
            </div>
        </div>
    )
}