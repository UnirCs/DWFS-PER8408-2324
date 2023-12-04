import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const useRedirection = (path, delay) => {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(path);
        }, delay);
    });
};

export default useRedirection;