import "./FilterAcordion.css"
import { FilterRadios } from "./FilterRadios/FilterRadios"
export const FilterAcordion = ({Status, setSpecies, setGender, setPage}) => {
    const statusArr =["alive", "dead", "unknown"];
    const genderArr =["female", "male", "genderless", "unknown"];
    const speciesArr = ["human", "alien", "humanoid", "poopybutthole", "mythological", "unknown", "animal", "disease", "cronenberg", "planet"];
    return <>
            <h2 className="text-white">Filter</h2>
            <p className="d-inline-block text-decoration-underline text-info" onClick={() => {
                Status("")
                setSpecies("")
                setGender("")
                setPage(1)
            }} 
            style={{cursor: "pointer"}}>Clear All</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Filter by Status
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          {statusArr.map((item, i) => <FilterRadios setState={Status} text={item} state="status" index={i} setPage={setPage}/>)}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Filter by Species
                        </button>
                    </h2>
                    <div  id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          {speciesArr.map((item, i) => <FilterRadios setState={setSpecies} text={item} state="spacies" index={i} setPage={setPage}/>)}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Filter by Gender
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          {genderArr.map((item, i) => <FilterRadios setState={setGender} text={item} state="gender" index={i}setPage={setPage} />)}
                        </div>
                    </div>
                </div>
            </div>
    </>
}