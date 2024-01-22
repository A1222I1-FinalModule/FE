import React, { useRef, useImperativeHandle } from 'react'
import { PDFExport } from "@progress/kendo-react-pdf";
import "../Assets/Styles/pdfDoc.css"

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
            <PDFExport ref={pdfExportComponent} paperSize="A3" fileName={`HoaDon${props.bill.billCode}`}>
                <h3 style={{ textAlign: 'center', fontSize: '16px' }}>HOA DON BAN HANG</h3>
                <p style={{ textAlign: 'center', fontSize: '14px' }}>Ma Don Hang: {props.bill.billCode}</p>
                <p style={{ textAlign: 'center', fontSize: '14px' }}>Thoi Gian: {new Intl.DateTimeFormat('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.now())}</p>
                <table style={{ margin: '0 auto', width: '95%', fontSize: '12px' }}>
                    <thead>
                        <tr>
                            <th style={{ fontSize: '12px' }}>STT</th>
                            <th style={{ fontSize: '12px' }}>Ten hang</th>
                            <th style={{ fontSize: '12px' }}>So luong</th>
                            <th style={{ fontSize: '12px' }}>Size</th>
                            <th style={{ fontSize: '12px' }}>Don gia</th>
                            <th style={{ fontSize: '12px' }}>Tong</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.bill.productBills && props.bill.productBills.map((value, index) => (
                            <tr key={value.productCode}>
                                <td style={{ textAlign: 'center', fontSize: '12px' }}>{index + 1}</td>
                                <td style={{ textAlign: 'center', wordWrap: 'break-word', whiteSpace: 'normal', fontSize: '12px' }}>{value.name}</td>
                                <td style={{ textAlign: 'center', fontSize: '12px' }}>{value.quantity}</td>
                                <td style={{ textAlign: 'center', fontSize: '12px' }}>{value.size.size}</td>
                                <td style={{ textAlign: 'center', fontSize: '12px' }}>đ{value.price}</td>
                                <td style={{ textAlign: 'center', fontSize: '12px' }}>đ{value.price * value.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h5 style={{ textAlign: 'center', fontSize: '14px' }}>Tong <span>đ{props.bill.total}</span></h5>
                <h5 style={{ textAlign: 'center', fontSize: '14px' }}>Giam <span>đ{props.discount.sale ? props.discount.sale : 0}</span></h5>
                <h5 style={{ textAlign: 'center', fontSize: '14px' }}>Thanh Tien <span>đ{props.bill.total - (props.discount.sale ? props.discount.sale : 0)}</span></h5>
            </PDFExport>
        </div>
    );
});
export default PdfDoc;