import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

//Hook para redireccionar tras un tiempo
const useRedirection = (path, delay) => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(path);
        }, delay);
    });
};

export default useRedirection;