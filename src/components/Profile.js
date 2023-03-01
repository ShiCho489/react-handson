const user = {
    name: 'Ada Joshua',
    imageUrl: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    imageSize: 100,
};

function Profile(){

    return(
        <>
        <h1>{user.name}</h1>
        <img 
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
            width: user.imageSize,
            height: user.imageSize
        }}
        />
        </>
    )
}

export default Profile;