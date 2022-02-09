import React, {useEffect, useState} from 'react';

const imageDivStyle = {
    display: "inline", 
    marginRight: "10px"
};

const MintedItems = ({uri}) => {
    const [imgUrl, setImgUrl] = useState("");
    const [altVal, setAltVal] = useState("");

    const getImageURL = (imageUrl) => {
        fetch(imageUrl).then(res => res.json()).then(mintMetaData => {
            setImgUrl(mintMetaData.image);
            setAltVal(mintMetaData.name);
        })
    }

    useEffect(() => {
        getImageURL(uri);
    }, [uri])

    return <div style={imageDivStyle}>
        { imgUrl !== "" && 
            <img alt={altVal} src={imgUrl} style={{ width: "300px" }}/> }
    </div>;
}

export default MintedItems;