import '../App.css'
export default function News() {
    return(
        <>
        <div className='navbar'>
            <img className='logo' src='/src/assets/F1-Logo.svg'/>
        </div>
        <div className='container'>
            <h1>News</h1>
            <div className='stories'>
                <h3>Stories</h3>
                <img className='story' src='https://video.formula1.com/assets/studio-templates/f8b43f26-66cd-6f47-d8bd-3a1c6f8664f4/3715666e-6771-4d15-84c2-41c1d85d0f1f/85358631-5da0-1c7b-8b17-3a1c6f8676bd/thumbnail_small.jpeg' alt='Azerbaijan Grand Prix - FP1 Preview'/>                 
                <img className='story' src='https://video.formula1.com/assets/studio-templates/eae126f9-b74d-831e-23ee-3a1c5ecac5db/acf46213-8441-c042-4b0b-3a1c5ecac5db/c40738f3-b998-5d7d-ac9e-3a1c5f004047/thumbnail_small.jpeg' alt='Best Onboards: Sergio Perez'/>
                <img className='story' src='https://video.formula1.com/assets/pages/22444e6d-e8ac-86ed-2921-3a1c64892ff7/e8e8ca00-32da-b5eb-a26b-3a1c6489e252/image_thumbnail.jpeg' alt="F1 Fantasy" />
                <img className='story' src='https://video.formula1.com/assets/studio-templates/07595bd2-e007-3333-fbb2-3a1b623ed81e/23a5c27a-55ca-4f90-aff3-7c6ec173d19c/816e09d5-051e-7500-0c0b-3a1b6245d770/thumbnail_small.jpeg' alt='Belgium 2025 - Race Highlights'/>
                <img className='story' src='https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Italy.webp'/>
            </div>
        </div>
        </>
    )
}