import { Link } from "react-router-dom";

function CartSanPham(props) {
    return (
        <div className="col-md-2 p-2 col-12">
                    <Link to={props.LienKet}><img width="250px" height="232px" src={props.HinhAnh} alt="..." className="img-thumbnail"/></Link>
                    <div>{props.NoiDung}</div>
                    <div>
                        <div className="row">

                    <div className="col-6 d-flex"><button type="button" className="btn btn-primary" >Mua ngay</button></div>
                    <div className="col-6 d-flex"><button type="button" className="btn btn-warning">Them giỏ hàng</button></div>
                    </div>
                        </div>
        </div>
    );
}

export default CartSanPham;