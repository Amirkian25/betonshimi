import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Search.module.css";


const SearchBar = ({Data}) => {
    const [filteredData , setFilteredData] = useState([]);
    const [wordEntered , setWordEntered] = useState("");
    
    const handleFilter = event => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = Data.filter((value) =>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter);
        }
        
    }; 
    const clearInput = ()=>{
        setFilteredData([]);
        setWordEntered("")
    }
    const displayNone = ()=>{
        setFilteredData([]);
        setWordEntered("")

    } 
    return (
        <div className={styles.search}>
            <div className={styles.searchInputs}>
                <input type="text" onChange={handleFilter} value={wordEntered} placeholder='محصول مورد نظر خود را جستجو کنید' />
                <div className={styles.searchIcon}>
                    {filteredData.length === 0 ? (
                        <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                    </svg>

                    ):(
                        <svg class="svg-icon" id={styles.clearBtn} onClick={clearInput} viewBox="0 0 20 20">
							<path  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
						</svg>
                    )
                    }
                
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className={styles.dataResult}>
                    {console.log(filteredData)}
                     {filteredData.map((value,key) =>{
                return (
                    <Link onClick={displayNone} key={key} className={styles.dataItem} to={value.path}>
                        <p>{value.title}</p>
                    </Link>
                )
            })}
                </div>
            )}
           
            
        </div>
    );
};

export default SearchBar;