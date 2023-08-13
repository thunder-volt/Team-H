// PredictionForm.js
// PredictionForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './PredictionForm.css'; // Import your custom CSS file

function PredictionForm() {
    const [propertySize, setPropertySize] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [location, setLocation] = useState('');
    const [predictedPrice, setPredictedPrice] = useState(null);
    const [id, setId] = useState('');
    const [type, setType] = useState('');
    const [locality, setLocality] = useState('');
    const [activation_date, setActivaton_date] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [lease_type, setLeaseType] = useState('');
    const [gym, setGym] = useState('');
    const [Lift, setLift] = useState('');
    const [swimming_pool, setSwimmingPool] = useState('');
    const [negotiable, setNegotiable] = useState('');
    const [furnishing, setFurnshing] = useState('');
    const [parking, setParking] = useState('');
    const [property_age, setPropertyAge] = useState('');
    const [bathroom, setBathroom] = useState('');
    const [facing, setFacing] = useState('');
    const [cup_borad, setCupBoard] = useState('');
    const [floor, setFloor] = useState('');
    const [total_floor, setTotalFloor] = useState('');
    const [amenities, setAmenities] = useState('');
    const [water_supply, setWaterSupply] = useState('');
    const [building_type, setBuildingType] = useState('');
    const [balconies, setBalconies] = useState('');
    const [formData, setFormData] = useState({
        propertySize: "",
        bedrooms: "",
        location: "",
        predictedPrice: "",
        id: "",
        type: "",
        locality: "",
        activation_date: "",
        latitude: "",
        longitude: "",
        lease_type: "",
        gym: "",
        Lift: "",
        swimming_pool: "",
        negotiable: "",
        furnishing: "",
        parking: "",
        property_age: "",
        bathroom: "",
        facing: "",
        cup_borad: "",
        floor: "",
        total_floor: "",
        amenities: "",
        water_supply: "",
        building_type: "",
        balconies: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData([
            propertySize,
            bedrooms,
            location,
            predictedPrice,
            id,
            type,
            locality,
            activation_date,
            latitude,
            longitude,
            lease_type,
            gym,
            Lift,
            swimming_pool,
            negotiable,
            furnishing,
            parking,
            property_age,
            bathroom,
            facing,
            cup_borad,
            floor,
            total_floor,
            amenities,
            water_supply,
            building_type,
            balconies
        ])
        await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((res) => {
                setPredictedPrice(res);
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <div className="prediction-form">
            <h1>IITM Pravartak datathon</h1>
            <h1>Rental Price Prediction</h1>
            <form onSubmit={handleSubmit}>

                <div className='input-group'>
                    <label>
                        Id:
                        <input type="text" value={id} onChange={e => setId(e.target.value)} required />
                    </label>
                    <label>
                        Type:
                        <input type="text" value={type} onChange={e => setType(e.target.value)} required />
                    </label>

                    <label>
                        Locality:
                        <input type="text" value={locality} onChange={e => setLocality(e.target.value)} required />
                    </label>
                </div>

                <div className='input-group'>
                    <label>
                        Activation Date:
                        <input type="text" value={activation_date} onChange={e => setActivaton_date(e.target.value)} required />
                    </label>


                    <label>
                        Latitude:
                        <input type="text" value={latitude} onChange={e => setLatitude(e.target.value)} required />
                    </label>


                    <label>
                        Longitude:
                        <input type="text" value={longitude} onChange={e => setLongitude(e.target.value)} required />
                    </label>
                </div>

                <div className='input-group'>
                    <label>
                        Lease Type:
                        <input type="text" value={lease_type} onChange={e => setLeaseType(e.target.value)} required />
                    </label>


                    <label>
                        Gym:
                        <input type="text" value={gym} onChange={e => setGym(e.target.value)} required />
                    </label>


                    <label>
                        Lift:
                        <input type="text" value={Lift} onChange={e => setLift(e.target.value)} required />
                    </label>
                </div>

                <div className='input-group'>
                    <label>
                        Swimming Pool:
                        <input type="text" value={swimming_pool} onChange={e => setSwimmingPool(e.target.value)} required />
                    </label>


                    <label>
                        Negotiable:
                        <input type="text" value={negotiable} onChange={e => setNegotiable(e.target.value)} required />
                    </label>


                    <label>
                        Furnishing:
                        <input type="text" value={furnishing} onChange={e => setFurnshing(e.target.value)} required />
                    </label>
                </div>

                <div className='input-group'>
                    <label>
                        Parking:
                        <input type="text" value={parking} onChange={e => setParking(e.target.value)} required />
                    </label>


                    <label>
                        Property Size:
                        <input type="text" value={propertySize} onChange={e => setPropertySize(e.target.value)} required />
                    </label>


                    <label>
                        Property Age:
                        <input type="text" value={property_age} onChange={e => setPropertyAge(e.target.value)} required />
                    </label>
                </div>

                <div className='input-group'>
                    <label>
                        Bathroom:
                        <input type="text" value={bathroom} onChange={e => setBathroom(e.target.value)} required />
                    </label>


                    <label>
                        Facing:
                        <input type="text" value={facing} onChange={e => setFacing(e.target.value)} required />
                    </label>


                    <label>
                        Cup Borad:
                        <input type="text" value={cup_borad} onChange={e => setCupBoard(e.target.value)} required />
                    </label>
                </div>

                <div className='input-group'>
                    <label>
                        Floor:
                        <input type="text" value={floor} onChange={e => setFloor(e.target.value)} required />
                    </label>


                    <label>
                        Total Floor:
                        <input type="text" value={total_floor} onChange={e => setTotalFloor(e.target.value)} required />
                    </label>


                    <label>
                        Amenities:
                        <input type="text" value={amenities} onChange={e => setAmenities(e.target.value)} required />
                    </label>
                </div>

                <div className='input-group'>
                    <label>
                        Water Supply:
                        <input type="text" value={water_supply} onChange={e => setWaterSupply(e.target.value)} required />
                    </label>


                    <label>
                        Building Type:
                        <input type="text" value={building_type} onChange={e => setBuildingType(e.target.value)} required />
                    </label>


                    <label>
                        Balconies:
                        <input type="text" value={balconies} onChange={e => setBalconies(e.target.value)} required />
                    </label>
                </div>

                <button type="submit">Predict</button>
            </form>
            {
                { predictedPrice } && <p>Predicted Rental Price: {predictedPrice}</p>
            }
        </div>
    );
}

export default PredictionForm;

