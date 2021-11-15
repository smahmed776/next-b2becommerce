import ProfilePage from "../../Components/Profile/ProfilePage";
import { useUser } from "../../Components/GlobalContext/useuser";
import { useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

export default function profile() {
    const Router = useRouter();
  const { data, isLoading, isError } = useUser('user', '/getuser', 'GET');

  
      if(isLoading){
        return  (
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
      if(isError){
        return  Router.push('/')
      }
  
  return <ProfilePage user={data.user} />;
}

