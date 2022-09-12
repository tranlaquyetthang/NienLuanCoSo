import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SearchForm(props) {
  return (
        <div className="col-md-6">
          &nbsp;
          <form>
            <div className="input-group mb-3">
              <input type="text" className="form-control" onChange={(event)=>(console.log(event.target.value))} placeholder="Search..." />
              <div className="input-group-append">
                <span className="input-group-text">
                <FontAwesomeIcon className='textColor1' icon="search" />
                </span>
              </div>
            </div>
          </form>
        </div>
  );
}

export default SearchForm;