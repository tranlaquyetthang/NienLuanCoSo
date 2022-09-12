function CardProduct1(props) {
  return (
      <div className="col-md-3 ">
        <br></br>
        <div className="card" >
            <img className="card-img-top" src={props.HinhAnh} alt="Ban phim" height={300} width={100}/>
            <div className="card-body">
                <p className="card-text">{props.MieuTa}</p>
                <a href={props.LienKet} className="btn btn-primary">{props.TieuDe}</a>
            </div>
        </div>
        <br></br>
      </div>
  );
}

export default CardProduct1;
