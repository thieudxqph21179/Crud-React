import { useGetProductByIdQuery, useUpdateProductMutation } from '@/api/product';
import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
const UpdateProduct = () => {
    const [updateProduct] = useUpdateProductMutation();
    const {id} = useParams();
    const [form] = Form.useForm();
    const {data:dataProduct} = useGetProductByIdQuery(id || "");
    useEffect(()=>{
        form.setFieldsValue(dataProduct);
    },[dataProduct])
    const navigate = useNavigate();
    const isNumber = (rule:any,value:any,calback:any)=>{
        if(isNaN(Number(value))){
            calback("Giá sản phẩm phải là số")
        }else{
            calback()
        }
    }
    const onFinish = (values: any) => {
        updateProduct({...values,id:id}).unwrap().then(()=>{
            alert("Sửa sản phẩm thành công")
            navigate(`/`);
        })
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div><h1>Update Product</h1>
        <Form
        form={form}
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
      <Button type="primary" danger htmlType="submit"  style={{marginRight:10}}>
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

export default UpdateProduct