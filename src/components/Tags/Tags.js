import './Tags.css'

const Tags = () => {
    const tags = [
        {
            id: 1,
            tag: '#2023'
        },
        {
            id: 2,
            tag: '#TODAYISMONDAY'
        },
        {
            id: 3,
            tag: '#TOP'
        },
        {
            id: 4,
            tag: '#POPS!'
        },
        {
            id: 5,
            tag: '#WOW'
        },
        {
            id: 6,
            tag: '#ROW'
        }
    ]
    return (
        <div className='tags-container'>
            {
                tags.map(({ id, tag }) => {
                    return (
                        <span className='tags' key={id}>{tag}</span>          
                )
            })
            }        
        </div>
    )
}

export default Tags