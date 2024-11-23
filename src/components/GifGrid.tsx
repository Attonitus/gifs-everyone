import './GifGrid.css'
import { GifItem } from './GifItem'

interface Props{
    categories: string[]
}


export const GifGrid = ({categories}: Props) => {

    return(

        <div className='gif-grid'>
            {
                categories.map( category => (
                    <GifItem nameCategory={category} key={category}  />
                ))
            }
        </div>

    )
}