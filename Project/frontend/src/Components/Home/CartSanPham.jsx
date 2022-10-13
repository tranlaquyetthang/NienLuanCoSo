function CartSanPham(props) {
    return (
        <div className="col-md-2 p-2 col-12">
                    <img width="250px" height="232px" src={props.HinhAnh} alt="..." class="img-thumbnail"/>
                    <div>{props.NoiDung}</div>
                    <div>mua ngay/ them gio hang</div>
        </div>
    );
}

export default CartSanPham;