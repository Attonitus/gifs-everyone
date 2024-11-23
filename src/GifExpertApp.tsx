
import { InputCategory } from './components/InputCategory';
import { GifGrid } from './components/GifGrid';
import { useCategoriesContext } from './context/categories-context';

import './App.css'


export const GifExpertApp = () => {
    const {categories, setCategories} = useCategoriesContext();

    const onAddCategory = (category: string) => {
        if(categories.includes(category.toLowerCase())) return;

        setCategories((cat) => [category, ...cat]);
    }

    return(
        <>
            <h1 className="primary-text">Gifs for everyone</h1>
            <InputCategory onNewValue={onAddCategory} />
            <GifGrid categories={categories} />
        </>
    )
}