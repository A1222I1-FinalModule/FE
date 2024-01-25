import React, { useRef, useImperativeHandle } from 'react'
import { PDFExport } from "@progress/kendo-react-pdf";
import "../../Assets/Styles/pdfDoc.css"

const PdfDoc = React.forwardRef((props, ref) => {
    const pdfExportComponent = useRef(null);
    const handleExportPdf = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };
    useImperativeHandle(ref, () => ({
        handleExportPdf,
    }), [handleExportPdf]);
    return (
        <div className='display-none-payment'>
            <PDFExport ref={pdfExportComponent} paperSize="Legal" fileName={`HoaDon${props.bill.billCode}`}>
                <h1 style={{ textAlign: 'center', marginTop: "40px" }}>A1222I1</h1>
                <h3 style={{ textAlign: 'center', fontSize: '16px', marginTop: "20px" }}>HÓA ĐƠN BÁN HÀNG</h3>
                <p style={{ textAlign: 'center', fontSize: '14px' }}>{props.bill.billCode}</p>
                <p style={{ textAlign: 'center', fontSize: '14px' }}>Thời gian: {new Intl.DateTimeFormat('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: "2-digit", minute: "2-digit" }).format(Date.now())}</p>
                <table style={{ margin: '10px auto 0', width: '95%', fontSize: '12px' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center', fontSize: '12px' }}>Tên hàng</th>
                            <th style={{ textAlign: 'center', fontSize: '12px' }}>Size</th>
                            <th style={{ textAlign: 'center', fontSize: '12px' }}>Đơn giá</th>
                            <th style={{ textAlign: 'center', fontSize: '12px' }}>SL</th>
                            <th style={{ textAlign: 'center', fontSize: '12px' }}>Tổng</th>
                        </tr>
                    </thead>
                    <tbody style={{ borderBottom: '2px solid', borderTop: '2px solid' }}>
                        {props.bill.productBills && props.bill.productBills.map((value, index) => (
                            <tr key={value.productCode}>
                                <td style={{ textAlign: 'center', width: '40%' }}>{value.name}</td>
                                <td style={{ textAlign: 'center', width: '10%' }}>{value.size.size}</td>
                                <td style={{ textAlign: 'center', width: '20%' }}>{value.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                <td style={{ textAlign: 'center', width: '10%' }}>{value.quantity}</td>
                                <td style={{ textAlign: 'center', width: '20%' }}>{(value.price * value.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ margin: "10px 0" }}>
                    <h5 style={{ textAlign: 'center', fontSize: '14px' }}>Tổng tiền hàng: <span>{props.bill.total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></h5>
                    <h5 style={{ textAlign: 'center', fontSize: '14px' }}>Giảm: <span>{(props.discount.sale ? props.discount.sale : 0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></h5>
                    <h5 style={{ textAlign: 'center', fontSize: '14px' }}>Tổng cộng: <span>{(props.bill.total - (props.discount.sale ? props.discount.sale : 0)).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></h5>
                </div>
                <h4 style={{ textAlign: 'center', borderTop: '2px dashed' }}>Cảm ơn bạn rất nhiều, hẹn gặp lại nhé!</h4>
            </PDFExport>
        </div>
    );
});
export default PdfDoc;