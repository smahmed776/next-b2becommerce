import ProfilePage from "../../Components/Profile/ProfilePage";
import { AuthContext } from "../../Components/GlobalContext/authContext";
import { useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

export default function profile() {
    const Router = useRouter();
    const {data: session } = useSession();
  const { customerInfo, marchentInfo } = useContext(AuthContext);
  const [customer] = customerInfo;
  const [marchent] = marchentInfo;
  useEffect(()=> {
      if(!session && !customer && !marchent){
          Router.push('/')
      }
  })
  return <ProfilePage user={customer[0] ? customer[0] : marchent[0]} />;
}

