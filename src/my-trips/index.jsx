import { db } from '@/service/firebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'; // Correct import
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {
    const navigate = useNavigate(); // Correct hook usage
    const [userTrips,setUserTrips]=useState([])

    useEffect(() => {
        GetUserTrips();
    }, []);

    //USed to get all user trips

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (!user) {
            navigate('/'); // Redirect if no user
            return;
        }
        setUserTrips([]);
        try {
            const q = query(collection(db, 'AITrips'), where('userEmail', '==', user.email));
            const querySnapshot = await getDocs(q);

            const tripsArray = querySnapshot.docs.map(doc => doc.data()); // ✅ Collect trips at once
            setUserTrips(tripsArray); // ✅ Update state in one go

        } catch (error) {
            console.error("Error fetching trips:", error);
        }
    };

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-15 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>My Trips</h2>

            <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-3'> 
                {userTrips?.length>0?userTrips.map((trip,index)=>(
                    <UserTripCardItem key={index} trip={trip}  />
                ))
             :[1,2,3,4,5,6].map((item,index)=>{
                <div key={index} className='h-[250px] w-full bg-slate-200 animate-pulse rounded-xl' > 

                </div>
             })
            }

            </div>
            <div>
            </div>
        </div>
    );
}

export default MyTrips;
