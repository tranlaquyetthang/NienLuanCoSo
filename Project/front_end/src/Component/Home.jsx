import CardProduct1 from "./CardProduct1"
import CardProduct from "./CardProduct"
function Home(props) {
  return (
    <div className="container-fluid justify-content-center">
              <div className='row'>
                <CardProduct1 HinhAnh="https://vinet.com.vn/wp-content/uploads/2022/04/ban-phim-custom-case.jpg" TieuDe="Bàn phím" LienKet="https:\\www.google.com" MieuTa="Chuyên cung cấp bàn phím cơ, bàn phím văn phòng, etc."/>
                <CardProduct1 HinhAnh="https://cdn.shopify.com/s/files/1/1573/2927/products/uc_symm-wifi_white_4_solid.jpg?v=1648187166" TieuDe="Chuột" LienKet="https:\\www.google.com" MieuTa="Các thương hiệu nổi tiếng như Razor, etc. điều có ở đây"/>
                <CardProduct1 HinhAnh="https://sc04.alicdn.com/kf/HTB1LVuPXUvrK1RjSszfq6xJNVXaZ.jpg" TieuDe="USB" LienKet="https:\\www.google.com" MieuTa="Samsung, Kingsdom,Lg, apple là những thương hiệu đối tác của chúng tôi"/>
                <CardProduct1 HinhAnh="http://www.laptopsinhviencantho.com/uploads/products/91ssd-gigabyte-120gb-chinh-hang-can-tho.png" TieuDe="SSD" LienKet="https:\\www.google.com" MieuTa="Nơi thể hiện tốc độ công nghệ vượt bậc mà bạn chưa từng thấy"/>
                <CardProduct1 HinhAnh="https://chonhangchuan.com/wp-content/uploads/2019/10/man-hinh-may-tinh-12.jpg" TieuDe="Màn Hình" LienKet="https:\\www.google.com" MieuTa="Chân thực, sống động là niềm tự hào đối với chúng tôi"/>
                <CardProduct1 HinhAnh="https://ae01.alicdn.com/kf/H3513a057fe024513bd7b869ed7bb6dd8i/Thermalright-U120EX-REV-4-en-Tr-ng-6-ng-Nhi-t-T-n-Nhi-t-CPU.jpg" TieuDe="Fan tản nhiệt" LienKet="https:\\www.google.com" MieuTa="Đem trải nghiệm mát lạnh bất chấp nắng nóng tập chung vào hiệu suất tối đa" />
                <CardProduct1 HinhAnh="https://www.notebookcheck.org/fileadmin/Notebooks/NVIDIA/Titan_RTX/Titan_RTX_18.jpg" TieuDe="Card đồ họa" LienKet="https:\\www.google.com" MieuTa="Chinh chiến mọi game yêu cầu đồ họa cao"/>
                <CardProduct1 HinhAnh="https://3dcomputer.vn/uploads/images/products/bo-nho-ram/kingston-fury-beast-16gb-8gbx2-ddr4-bus-3200mhz/kit-ram-kingston-fury-beast-rgb-16gb.jpg" TieuDe="RAM" LienKet="https:\\www.google.com" MieuTa="Trải nghiệm mượt mà với bộ nhớ cực khủng"/>
                <CardProduct1 HinhAnh="https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/142681/Originals/bo-nguon-may-tinh-psu-tot-nhat-4.jpg" TieuDe="Nguồn máy tính" LienKet="!#" MieuTa="Năng lượng mạnh mẽ là sự cần thiết cho khởi đầu"/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
              </div>
          </div>
  );
}

export default Home;
