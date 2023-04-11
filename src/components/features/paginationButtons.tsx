import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import PaginationButtonsButton from './paginationButtonsButton';
import styles from '../../styles/features/paginatedButtons.module.css'
import { Item } from '../../interfaces';

interface PaginationButtonsProps{
    currentPage:number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    setPaginatedItems: (items: Item[]) => void;
    items:Item[];
}

const PaginationButtons = ({currentPage, setCurrentPage, setPaginatedItems, items}:PaginationButtonsProps) => {

    const [pageNumbers, setPageNumbers] = useState<number[]>([]);

    useEffect(()=>{
        const itemsPerPage = 9;

        const lastItem = currentPage * itemsPerPage;
        const firstItem = lastItem - itemsPerPage;

        const newPageNumbers = [];
        const totalPages = Math.ceil(items.length / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            newPageNumbers.push(i);
        }

        setPageNumbers(newPageNumbers);
        setPaginatedItems(items.slice(firstItem, lastItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentPage, items])


    const pageDown = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
      const pageUp = () => {
        if (currentPage < pageNumbers.length) {
          setCurrentPage(currentPage + 1);
        }
      };
    
    
    return(
        <ul className={styles.buttons}>
            <PaginationButtonsButton clickF={pageDown} direction={'left'} 
            />
            {pageNumbers.map((e: number) => {
                return (
                    <li
                    className={currentPage === e ? `${styles.pageNumButton}` : ""}
                    key={e}
                    >
                    <button onClick={() => setCurrentPage(e)}>{e}</button>
                    </li>
                );
                })}
                <PaginationButtonsButton clickF={pageUp} direction={'right'}
                />
            </ul>
    )
}

export default PaginationButtons;