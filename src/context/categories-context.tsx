import { createContext, ReactNode, useContext, useState } from "react";


interface CategoriesContextProps{
    categories: string[],
    setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

interface Props{
    children: ReactNode
}

const CategoriesContext = createContext<CategoriesContextProps |  null>(null);

export const CategoryProvider = ({children}: Props) => {
    const [categories, setCategories] = useState<string[]>(["Bjork", "Cat"]);

    return(
        <CategoriesContext.Provider value={ {categories, setCategories } }>
            {children}
        </CategoriesContext.Provider>
    )
}


export const useCategoriesContext = () => {
    const context = useContext(CategoriesContext);
    if(!context){
        throw new Error(`Context must be inside of a provider`);
    }
    return context;
}
