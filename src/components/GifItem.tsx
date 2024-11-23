import { useCategoriesContext } from '../context/categories-context';
import { useFetch } from '../hooks/useFetch';
import './GifItem.css';

interface Props{
    nameCategory: string
}


export const GifItem = ({nameCategory}: Props) => {

    const {data, error, loading} = useFetch(nameCategory);

    const {setCategories} = useCategoriesContext();

    const onDeleteGifItem = () => {
        setCategories( categories => categories.filter( category => category !== nameCategory ));
    }


    return(
        <>
            {
                loading &&  <div className='loader'>Loading...</div>
            }
            {
                error ? <div className='error-text'>Error fetching data</div> : 
                <div className='gif-item'>
                    <div className="gif-item-title">
                        {nameCategory}
                        <button className='gif-item-button' onClick={onDeleteGifItem}>X</button>
                    </div>
                    <div className="gif-item-gifs">
                        {
                            data?.data.map( gif => (
                                <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
}