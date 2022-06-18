import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav'

export default function Index() {

    const [cats, setCats] = useState([])


    useEffect(() => {
        const fetchCats = async () => {
            const response = await fetch('/api/cats');
            const data = await response.json();
            setCats(data);
            console.log(data);
        }
        fetchCats();
    }, [])

    return (
        <>
            <Nav />
            <div className='container mt-5'>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                    {
                        cats.map(cat => <Card
                            key={cat.id}
                            cat={cat}
                        ></Card>)
                    }
                </div>
            </div>
        </>
    )
}
