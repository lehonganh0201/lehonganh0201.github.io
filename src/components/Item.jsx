import { useEffect, useState } from "react";
import axios from "axios";
import './Item.scss';

const Item = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State để kiểm tra xem dữ liệu đã tải xong hay chưa
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = `https://picsum.photos/v2/list?page=${page}&limit=8`;
        const response = await axios.get(api);
        setImages(prevImages => [...prevImages, ...response.data]); // Thêm dữ liệu mới vào mảng hiện tại
        setIsLoading(false); // Đánh dấu là đã tải xong
        console.log(response.data);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1); // Tăng số trang để tải thêm ảnh
  };

  return (
    <div className="item">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="row">
            {images.map((img) => (
              <div className="img" key={img.id}>
                <img src={img.download_url} alt={img.author} />
              </div>
            ))}
          </div>
          <button className="more" onClick={loadMore}>More</button>
        </>
      )}
    </div>
  );
};

export default Item;
