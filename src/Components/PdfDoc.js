import React, { useRef } from 'react'
import { PDFExport } from "@progress/kendo-react-pdf";

export default function PdfDoc(props, ref) {
    const pdfExportComponent = useRef(null);
    const handleExportPdf = (event) => {
        pdfExportComponent.current.save();
    };
    React.useImperativeHandle(ref, () => ({
        handleExportPdf,
    }));
    return (
        <>
            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <h3 className='text-center'>HOA DON BAN HANG</h3>
                <p className='text-center'>Ma Don Hang: {props.bill.billCode}</p>
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã hàng</th>
                            <th>Tên hàng</th>
                            <th>Số lượng</th>
                            <th>Size</th>
                            <th>Đơn giá</th>
                            <th>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.bill.productBills && props.bill.productBills.map((value, index) => (
                            <tr key={value.productCode}>
                                <td>{index + 1}</td>
                                <td>{value.productCode}</td>
                                <td>{value.name}</td>
                                <td>{value.quantity}</td>
                                <td>{value.size.size}</td>
                                <td>đ{value.price}</td>
                                <td>đ{value.price * value.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h5>Tổng <span>đ{props.bill.total}</span></h5>
                <h5>Giảm <span>đ{props.discount.sale ? props.discount.sale : 0}</span></h5>
                <h5>Thành tiền <span>đ{props.bill.total - (props.discount.sale ? props.discount.sale : 0)}</span></h5>
            </PDFExport >
        </>
    )
}
