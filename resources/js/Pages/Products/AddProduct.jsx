import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography, Form, Input, Row, Col, Button } from "antd";
const { TextArea } = Input;

function AddProducts(props) {
    return (
        <>
            <Head title="Add Products" />

            <Card title={`Add Product Page`}>
                <Form layout="vertical">
                    <Row gutter={[8, 4]}>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name={"productname"}
                                label="Product Name"
                            >
                                <Input
                                    name="productname"
                                    placeholder="Enter Product Name"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="productprice"
                                label="Product Price"
                            >
                                <Input
                                    name="productprice"
                                    type="number"
                                    placeholder="Enter Product Price"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item name={"discount"} label="Discount">
                                <Input
                                    name="discount"
                                    placeholder="Discount %"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                label="Product Image"
                                name={"productimage"}
                            >
                                <input
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
                                    name="description"
                                    placeholder="Product Description"
                                    rows={5}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button
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
