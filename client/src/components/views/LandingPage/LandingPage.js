import React, {useEffect} from 'react'
import axios from 'axios'

function LandingPage() {

    // LandingPage() 실행하자마자 아래 실행
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            LandingPage 랜딩페이지
        </div>
    )
}

export default LandingPage
