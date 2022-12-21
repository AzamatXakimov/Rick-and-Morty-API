
export const FilterRadios = ({text, state, index, setState, setPage}) => {
    return <>
        <div class="form-check">
            <input className="form-check-input" onClick={() => {
                setState(text);
                setPage(1)
            }} type="radio" name={state} id={`${state} ${index}`}/>
            <label className="form-check-label" htmlFor={`${state} ${index}`}>
                {text}
            </label>
        </div>

    </>
}