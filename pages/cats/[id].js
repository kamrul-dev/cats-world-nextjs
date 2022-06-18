import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Cat() {
    const [cat, setCat] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchCat = async () => {
            await fetch(`/api/cats/${id}`)
                .then(res => res.json())
                .then(data => setCat(data))
        }
        fetchCat();
    }, [id])

    return (
        <div>
            {
                cat && (
                    <div className='container mt-5' style={{ display: "flex" }}>
                        <img className='p-4' src={cat?.image?.url} alt={cat?.image?.alt} />
                        <div className='p-4'>
                            <h1>{cat.name}</h1>
                            <p>{cat.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
