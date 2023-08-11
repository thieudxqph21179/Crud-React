
import { Button, Popconfirm,  Table } from 'antd';
import { useGetProductsQuery, useRemoveProductMutation } from '@/api/product';
import { IProduct } from '@/interfaces/product';
import { Link } from 'react-router-dom';
const ListProduct = () => {
const {data:dataProduct} = useGetProductsQuery();
const [removeProduct] = useRemoveProductMutation();
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
     
      render: ({key:id}:{key:number|string}) => (
     <div>
           <Popconfirm
        title="Bạn có chắc chắn xóa sản phẩm này không?"
        onConfirm={()=>{
            removeProduct(id)
        }}
        okText="Chắc" 
        cancelText="Chưa chắc"
      >
        <Button danger  style={{marginRight:10}}>Xóa</Button>
      </Popconfirm>
      <Button danger><Link to={`edit/${id}`}>Cập nhật</Link></Button>

     </div>
      
      ),
    },
  ];
  
  const data = dataProduct?.map((products:IProduct)=>({
    key:products.id,
    name:products.name,
    price:products.price
  }))
  
  return (
    <div>
        <h1>Quản lý sản phẩm</h1>
        <br />
      <Button danger style={{margin:10}}><Link to={`add`}>Thêm sản phẩm</Link></Button>

        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ListProduct