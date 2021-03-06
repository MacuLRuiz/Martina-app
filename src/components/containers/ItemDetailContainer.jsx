import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail'
import { getFirestore } from '../../services/getFirestore';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true);
    

    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore();
		const dbQuery = db.collection("products").doc(id).get();
		dbQuery
			.then((resp) => setDetail({id: resp.id, ...resp.data()}))
			.catch((err) => alert(`Error: ${err}`))
			.finally(() => setLoading(false));

    },[id])   

    return (
            <>
                {   loading ? 
                
                        <div className="loadingio-spinner-spinner-azwl2vh0tq8"><div className="ldio-3aj1p72vvt4">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div></div>

                    :   
                    
                        <div className="itemDetail-container">
                        <ItemDetail detail={detail}/>
                        </div>

                }
            </>      
    )
}

export default ItemDetailContainer




