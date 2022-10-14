import { useEffect, useState } from "react";

import data from "../../data/data"
import CartSanPham from "./CartSanPham";

function Home(props) {
    //tim kiem san pham
    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(data.SanPham)
    },[])

    function search(items) {
        return items.filter((item) => {
            return props.searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(props.kiemTra.toLowerCase()) > -1
                );
            });
        });
    }
    //tim kiem san pham
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-2 col-12 bg-warning">
                    <img width="250px" height="232px" src="data:image/jpeg;base64,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" alt="..." className="img-thumbnail"/>
                    <div>Noidung</div>
                    <div>mua ngay/ them gio hang</div>
                    <div>Noidung</div>
                    <div>mua ngay/ them gio hang</div>
                    <div>Noidung</div>
                    <div>mua ngay/ them gio hang</div>
                    <div>Noidung</div>
                    <div>mua ngay/ them gio hang</div>
                    <div>Noidung</div>
                    <div>mua ngay/ them gio hang</div>
                    <div>Noidung</div>
                    <div>mua ngay/ them gio hang</div>
                </div>
                <div className="col-md-10 p-2 col-12">
                    <div className="row">
                    {search(items).map((item,id) => (
                                                        <CartSanPham key={id} HinhAnh={item.hinhAnh} NoiDung={item.tenSanPham}/>))
                    }  
                    </div>
                </div>   
            </div>
            <div className="row">
                <div className="col">
                    hello
                </div>
            </div>
        </div>
    );
}

export default Home;