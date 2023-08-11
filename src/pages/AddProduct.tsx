import { useAddProductMutation } from '@/api/product';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [addProduct] = useAddProductMutation();
    const navigate = useNavigate();
    const isNumber = (rule:any,value:any,calback:any)=>{
        if(isNaN(Number(value))){
            calback("Giá sản phẩm phải là số")
        }else{
            calback()
        }
    }
    const onFinish = (values: any) => {
        addProduct(values).unwrap().then(()=>{
            alert("Thêm sản phẩm thành công")
            navigate(`/`);
        })
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div><h1>Thêm sản phẩm</h1>
        <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Tên sản phẩm"
      name="name"
      rules={[{ required: true, message: 'Không được để trống tên' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Giá sản phẩm"
      name="price"
      rules={[{ required: true, message: 'Không được để trống giá' },{validator:isNumber}]}
    >
      <Input />
    </Form.Item>

   

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" danger htmlType="submit" style={{marginRight:10}}>
        Submit
      </Button>

      <Button type="primary" danger >
        <Link to={`/`}>Quay lại</Link>
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default AddProduct