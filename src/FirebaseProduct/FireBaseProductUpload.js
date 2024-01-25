import React, { useEffect, useState } from "react";
import { imageDb } from "./Config";
import { listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";


function FirebaseProductUpload() {
    const [img, setImg] = useState('');

    const handleClick = () => {
        const imgRef = ref(imageDb, `files/${v4()}`);
        uploadBytes(imgRef, img);
    }

    return (
        <div className="App">
            <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            <button onClick={handleClick}>Upload</button>
        </div>
    )
};

export default FirebaseProductUpload;