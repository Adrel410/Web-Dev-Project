import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';

function GeneratePicture() {
    const [url, setUrl] = useState('');
    function fetch_data() {
        fetch('https://api.thecatapi.com/v1/images/search').then(res => {
            if(res.ok) {
                return res.json();
            }
            throw new Error ('Request failure');
        },networkError => console.log(networkError.message)
        ).then(jsonRes => {
            setUrl(jsonRes[0].url)
        })    
    }
    return (
        <div>
            <img src={url} alt=""/>
            <Button onClick={fetch_data}>Get Photo</Button>
            <Button><i class="bi bi-hand-thumbs-up-fill"></i></Button>{' '}
            <Button variant="danger" onClick={fetch_data}><i class="bi bi-hand-thumbs-down-fill"></i></Button>{' '}
            
        </div>
    )
}

export default GeneratePicture;