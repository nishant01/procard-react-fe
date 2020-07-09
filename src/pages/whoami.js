import DefaultLaout from '../components/DefaultLayout';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const WhoAmI = () => {
    const { authState, dispatch } = useContext(AuthContext);
    return ( 
        <DefaultLaout>
            <h3>{authState.username}</h3>
        </DefaultLaout>
    )
}

export default WhoAmI;