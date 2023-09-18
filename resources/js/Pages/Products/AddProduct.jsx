import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";
import { Card, Typography, Form, Input, Row, Col, Button } from "antd";
const { TextArea } = Input;

function AddProducts({ props, record }) {
    //useFormHook
    const { data, setData, post, processing, errors, reset } = useForm({
        productname: "",
        productprice: "",
        discount: "",
        productimage: "",
        description: "",
    });

    const onSubmitHandler = () => {
        console.log(data);
        router.post("/products/store", data);
    };

    const [form] = Form.useForm();
    //submitForm
    const handelForm = () => {
        form.submit();
        form.setFieldsValue({
            productname: "",
            productprice: "",
            discount: "",
            productimage: "",
            description: "",
        });
    };
    return (
        <>
            <Head title="Add Products" />

            <Card title={`Add Product Page`}>
                <Form
                    layout="vertical"
                    onFinish={onSubmitHandler}
                    form={form}
                    autoComplete="on"
                >
                    <Row gutter={[8, 4]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="Product Name"
                                name={"productname"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter productname",
                                    },
                                ]}
                            >
                                <Input
                                    value={data.productname}
                                    type="text"
                                    name="productname"
                                    placeholder="Enter Product Name here"
                                    onChange={(e) =>
                                        setData("productname", e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="productprice"
                                label="Product Price"
                            >
                                <Input
                                    value={data.productprice}
                                    name="productprice"
                                    type="number"
                                    placeholder="Enter Product Price"
                                    onChange={(e) =>
                                        setData("productprice", e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item name={"discount"} label="Discount">
                                <Input
                                    value={data.discount}
                                    name="discount"
                                    placeholder="Discount %"
                                    onChange={(e) =>
                                        setData("discount", e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="Product Image"
                                name={"productimage"}
                            >
                                <input
                                    value={data.productimage}
                                    onChange={(e) =>
                                        setData("productimage", e.target.value)
                                    }
                                    type="file"
                                    name="productimage"
                                    placeholder="Choose Image"
                                    style={{
                                        width: "100%",
                                        border: "solid",
                                        borderColor: "#D9D9D9",
                                        borderRadius: "5px",
                                        padding: "2px",
                                        borderWidth: "0.5px",
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
                            <Form.Item
                                label="Product Description"
                                name={"description"}
                            >
                                <TextArea
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    name="description"
                                    placeholder="Product Description"
                                    rows={5}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            onClick={handelForm}
                            style={{ margin: "5px" }}
                            htmlType="submit"
                            type="primary"
                        >
                            Submit
                        </Button>
                        <Button
                            style={{ margin: "5px" }}
                            htmlType="reset"
                            danger
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Card>
        </>
    );
}

AddProducts.layout = (page) => <AuthenticatedLayout children={page} />;

export default AddProducts;
