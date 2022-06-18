import React from 'react'
import { useRouter } from 'next/router'

export default function Jumbotron() {
    const router = useRouter()
    return (
        <div className="jumbotron jumbotron-fluid mt-5">
            <div className="container">
                <h1 className="display-4">Cats World</h1>
                <p className="lead">Find your best friend today. Adopt a Wonderful Cat</p>
                <button onClick={() => router.push('/cats')}
                    type="button" className="btn btn-primary">Start Looking</button>
            </div>
        </div>
    )
}
