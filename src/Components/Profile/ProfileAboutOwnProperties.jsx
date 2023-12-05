import React, { useEffect } from 'react'
import ProfileCard from './ProfileCard';
import { useSelector, useDispatch } from "react-redux";
import { getAllDacha } from "store/addDacha/addDachaAction";
import Profile from 'Components/Pages/Profile';
import { allDachaDataMine } from 'store/addDacha/addDachaSelector';

const ProfileAboutOwnProperties = () => {
    const dispatch = useDispatch();

    const allDachaData = useSelector(allDachaDataMine);

    useEffect(() => {
        dispatch(getAllDacha());
    }, [dispatch]);
    return (
        <div>
            <Profile>
                {allDachaData &&
                    allDachaData.map((card) => (
                        <ProfileCard
                            img={card.images[0]}
                            name={card.name}
                            price={card.price}
                            location={card.district.nameUz}
                            beds={card.countRoom}
                            guests={card.hostCount}
                            superPrice={card.superPrice}
                            superComfort={card.superComfort}
                            recommended={card.recommended}
                            key={card.id}
                            id={card.id}
                            card={card}
                        />
                    ))}
            </Profile>
        </div>
    )
}

export default ProfileAboutOwnProperties
