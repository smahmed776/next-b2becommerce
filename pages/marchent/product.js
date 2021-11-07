import { useContext } from 'react';
import MarchentPage from '../../Components/Marchent/MarchentPage'
import { AuthContext } from '../../Components/GlobalContext/authContext'

export default function home() {
    const { customerInfo, marchentInfo } = useContext(AuthContext);
  const [customer] = customerInfo;
  const [marchent] = marchentInfo;
    return (
            <MarchentPage user={customer[0]? customer[0]: marchent[0]} home={false} about={false} product={true} live={false} />
    )
}