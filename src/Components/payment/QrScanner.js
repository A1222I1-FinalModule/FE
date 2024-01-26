import { Html5QrcodeScanType, Html5QrcodeScanner } from 'html5-qrcode'
import React, { useEffect, useState } from 'react'

export default function QrScanner(props) {
    const [res, setRes] = useState(null);
    useEffect(() => {
        function onScanSuccess(res) {
            props.handleScan(res);
            scanner.clear();
            setRes(res);
        }
        let scanner = new Html5QrcodeScanner(
            "reader", {
            fps: 10,
            qrBox: { width: 250, height: 250 },
            rememberLastUsedCamera: true,
            supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
        }, /* verbose= */ false);

        scanner.render(onScanSuccess);
    }, [])

    return (
        <div id='reader'>
            {res}
        </div>
    )
}
