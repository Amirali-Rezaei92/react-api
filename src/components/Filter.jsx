import './Filter.css';

function Filter({filter , setFilter}){
    return(
        <div>
            <select className='form-select w-25 bg-dark text-light' value={filter} onChange={(e)=>setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="actors">Actors</option>
                <option value="actresses">Actresses</option>
            </select>
        </div>
    )

}
export default Filter;