import UserProfile from "."

const userDetailsList =[
    {
        uniqueNo:1,
        imageUrl:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'Esther Howard',
        role: 'Software Developer'
    },
    {
        uniqueNo: 2,
        imageUrl:'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
        name: 'Floyd Miles',
        role: 'Software Developer'
    },
    {
        uniqueNo: 3,
        imageUrl:'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
        name: 'Jacob Jones',
        role: 'Software Developer'
    },
    {
        uniqueNo: 4,
        imageUrl:'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
        name: 'Devon Lane',
        role: 'Software Developer'
    }
]

const UserDetails = () =>{
    return(
        <div className="list-container">
            <h1 className="title">Users List</h1>
            <ul className="list-type">
                {
                    userDetailsList.map((eachItem)=>(
                        <li key = {eachItem.uniqueNo}>
                            <UserProfile userDetails={eachItem}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserDetails;