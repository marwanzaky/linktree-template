const profile = {
    fullname: 'Marwan Zaky',
    bio: 'full-stack web dev 👨🏻‍💻',
    picture: 'https://avatars.githubusercontent.com/u/64248203?v=4',
    socialMedia: [
        { name: 'Buy me a coffee ☕️', url: 'https://www.buymeacoffee.com/marwanzaky' },
        { name: 'Visit my portfolio 🍳', url: 'marwanzaky.com' },
        { name: 'Learn web dev 💻', url: '#' },
        { name: 'Visit my github 🤓', url: 'https://github.com/marwanzaky' },
        { name: 'Follow my twitter 💬', url: 'https://twitter.com/marwan_zaky_dev' }
    ]
}

const colors = [
    "#F4F1DE",
    "#E07A5F",
    "#3D405B",
    "#81B29A",
    "#F2CC8F"
];

function Button(props) {
    const style = {
        backgroundColor: colors[props.index]
    }

    return (
        <a href={props.url} className="button" style={style}>
            {props.name}
        </a>
    )
}

function Profile() {
    return (
        <section className="profile">
            <div className="profile-picture"><img src={profile.picture} alt={profile.name}></img></div>
            <div className="profile-fullname">{profile.fullname}</div>
            <div className="profile-bio">{profile.bio}</div>

            <div className="social_media flex flex-col w-full sm:w-[300px]">
                {profile.socialMedia.map((el, i) => <Button name={el.name} url={el.url} index={i} />)}
            </div>
        </section>
    );
}

export default Profile;
